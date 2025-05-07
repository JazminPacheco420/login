const express = require("express");
const cors = require("cors");
const amqp = require("amqplib");

const app = express();
app.use(cors());
app.use(express.json());

const RABBITMQ_URL = "amqps://scrummasters:passwordtemporal@computacion.mxl.uabc.mx:80";

async function sendToQueue(user) {
  const conn = await amqp.connect(RABBITMQ_URL);
  const channel = await conn.createChannel();
  
  await channel.assertExchange("event.newUser", "fanout", { durable: true });
  channel.publish("event.newUser", "", Buffer.from(JSON.stringify(user)), { persistent: true });

  console.log("Usuario enviado a RabbitMQ:", user);
  setTimeout(() => conn.close(), 500);
}

app.post("/register", async (req, res) => {
  const user = req.body;
  console.log("Recibido en backend:", user);

  try {
    await sendToQueue(user);
    res.json({ message: "Usuario registrado y enviado a RabbitMQ" });
  } catch (error) {
    console.error("Error enviando a RabbitMQ:", error);
    res.status(500).json({ message: "Error en el registro" });
  }
});

app.listen(3000, () => console.log(" Servidor corriendo en http://localhost:3000"));
