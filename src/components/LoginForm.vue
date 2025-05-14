<template>
  <div class="login">
    
    <form class="form" @submit.prevent="login">
      <div class="form-group">
        <label class="form-label" for="email">Correo:</label>
        <input 
          v-model="email" 
          class="form-input" 
          type="email" 
          id="email" 
          required
          placeholder="Correo" />
        <p v-if="errorEmail" class="error">{{ errorEmail }}</p>
      </div>

      <div class="form-group">
        <label class="form-label" for="password">Contraseña:</label>
        <input 
          v-model="password" 
          class="form-input" 
          type="password" 
          id="password" 
          required 
          placeholder="Contraseña" />
        <p v-if="errorPassword" class="error">{{ errorPassword }}</p>
      </div>

      <p v-if="error" class="error">{{ error }}</p>

      <input class="form-submit" type="submit" value="Iniciar sesión" />

      <div class="form-group">
        <label class="form-label"> ¿No tienes cuenta? <router-link to="/register">Regístrate</router-link> </label>
        
      </div>

    </form>
  </div>
</template>


<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      error: "",
      errorEmail: "",
      errorPassword: "",
    };
  },
  methods: {
    login() {
      this.errorEmail = "";
      this.errorPassword = "";
      this.error = "";

      if (!this.validateEmail(this.email)) {
        this.errorEmail = "Introduce un email válido.";
      }
      if (this.password.length < 6) {
        this.errorPassword = "La contraseña debe tener al menos 6 caracteres.";
      }

      if (!this.errorEmail && !this.errorPassword) {
        console.log("Login correcto:", this.email, this.password);
        // Aquí iría la llamada a la API
      } else {
        this.error = "Revisa los campos.";
      }
    },
    validateEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: baseline;
  height: 100vh;
  background: #ffffff; // Puedes cambiar esto por una imagen o color de fondo
}

.form-group {
  display: flex;
  flex-direction: column;
  align-items: center; // centra label e input
  width: 100%;
}

.form {
  width: 300px;
  padding: 20px;
  background: rgb(0,121,52);
  border-radius: 5px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}

.form-label {
  display: block;
  margin: 10px 0 5px;
  color: white;
  //font-weight: bold;
  text-align: center; // centra el texto
  //width: 100%;         // asegura que ocupe todo el ancho del formulario
}


.form-input {
  width: 100%;
  padding: 8px;
  border: 1px solid white;
  background: none;
  color: white;
}

.form-submit {
  background: rgb(236,170,1);
  border: none;
  color: white;
  padding: 10px;
  margin-top: 10px;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: rgb(220, 172, 52);
  }
}

.error {
  color: #ff8787;
  font-size: 0.9rem;
  font-weight: bold;
  margin-top: 5px;
}

nav {
  display: flex;
  gap: 20px;
  justify-content: center;
  margin: 20px;
  color: white;
}
</style>