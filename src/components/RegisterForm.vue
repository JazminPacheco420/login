<template>
  <div class="register">
    <h1 class="title">Registro</h1>
    <form class="form" @submit.prevent="register">
      <label class="form-label" for="nombre">Nombre:</label>
      <input
        v-model="nombre"
        class="form-input"
        type="text"
        id="nombre"
        required
        placeholder="Nombre"
      />
      <label class="form-label" for="email">Email:</label>
      <input
        v-model="email"
        class="form-input"
        type="email"
        id="email"
        required
        placeholder="Email"
      />
      <label class="form-label" for="rol">Rol:</label>
      <input
        v-model="rol"
        class="form-input"
        type="text"
        id="rol"
        required
        placeholder="Rol"
      />
      <label class="form-label" for="password">Password:</label>
      <input
        v-model="password"
        class="form-input"
        type="password"
        id="password"
        required
        placeholder="Password"
      />
      <label class="form-label" for="password-repeat">Repite la contraseña:</label>
      <input
        v-model="passwordRepeat"
        class="form-input"
        type="password"
        id="password-repeat"
        required
        placeholder="Repite contraseña"
      />
      <input class="form-submit" type="submit" value="Registrar" />
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nombre: "",
      email: "",
      rol: "",
      password: "",
      passwordRepeat: "",
    };
  },
  methods: {
    async register() {
      if (this.password !== this.passwordRepeat) {
        alert("Las contraseñas no coinciden");
        return;
      }

      const newUser = {
        nombre: this.nombre,
        email: this.email,
        rol: this.rol,
        password: this.password,
      };

      try {
        const response = await fetch("http://localhost:5173", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newUser),
        });

        const data = await response.json();
        alert(data.message);
      } catch (error) {
        console.error("Error en el registro:", error);
        alert("Error al registrar usuario");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
/* Tus estilos siguen igual */
</style>

<style lang="scss" scoped>
.register {
  padding: 2rem;
}
.title {
  text-align: center;
}
.form {
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 20%;
  min-width: 350px;
  max-width: 100%;
  background: rgba(19, 35, 47, 0.9);
  border-radius: 5px;
  padding: 40px;
  box-shadow: 0 4px 10px 4px rgba(0, 0, 0, 0.3);
}
.form-label {
  margin-top: 2rem;
  color: white;
  margin-bottom: 0.5rem;
  &:first-of-type {
    margin-top: 0rem;
  }
}
.form-input {
  padding: 10px 15px;
  background: none;
  background-image: none;
  border: 1px solid white;
  color: white;
  &:focus {
    outline: 0;
    border-color: #1ab188;
  }
}
.form-submit {
  background: #1ab188;
  border: none;
  color: white;
  margin-top: 3rem;
  padding: 1rem 0;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #0b9185;
  }
}
.error {
  margin: 1rem 0 0;
  color: #ff4a96;
}
</style>
