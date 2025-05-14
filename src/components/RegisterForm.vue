<template>
  <div class="register">
    
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
      <label class="form-label" for="email">Correo:</label>
      <input
        v-model="email"
        class="form-input"
        type="email"
        id="email"
        required
        placeholder="Correo"
      />
      <label class="form-label" for="rol">Rol:</label>
      <select
        v-model="rol"
        class="form-input"
        id="rol"
        required>
        <option disabled value="">Selecciona un rol</option>
        <option value="Estudiante" style="color: black;">Estudiante</option>
        <option value="Creador" style="color: black;">Creador</option>
      </select>

      <label class="form-label" for="password">Contraseña:</label>
      <input
        v-model="password"
        class="form-input"
        type="password"
        id="password"
        required
        placeholder="Contraseña"
      />
      <label class="form-label" for="password-repeat">Confirma la contraseña:</label>
      <input
        v-model="passwordRepeat"
        class="form-input"
        type="password"
        id="password-repeat"
        required
        placeholder="Confirma la contraseña"
      />
      <input class="form-submit" type="submit" value="Registrarse" />

      <div class="form-group">
        <label class="form-label"> ¿Ya tienes cuenta? <router-link to="/login">Inicia sesión</router-link> </label>
        
      </div>
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
.register {
  display: flex;
  padding: 2rem;
  align-items: baseline;
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
  background: rgb(0,121,52);
  border-radius: 5px;
  padding: 40px;
  box-shadow: 0 4px 10px 4px rgba(0, 0, 0, 0.3);
}
.form-label {
  margin-top: 2rem;
  color: white;
  margin-bottom: 0.5rem;
  //font-weight: bold;
  text-align: center;
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
  background: rgb(236,170,1);
  border: none;
  color: white;
  margin-top: 3rem;
  padding: 1rem 0;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: rgb(220, 172, 52);
  }
}
.form-group {
  display: flex;
  flex-direction: column;
  align-items: center; // centra label e input
  width: 100%;
}
.error {
  margin: 1rem 0 0;
  color: #ff4a96;
}
</style>
