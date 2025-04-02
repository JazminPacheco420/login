<template>
  <form class="form" @submit.prevent="login">
    <label class="form-label" for="email">Email:</label>
    <input v-model="email" class="form-input" type="email" id="email" placeholder="Email" />
    <p v-if="errorEmail" class="error">{{ errorEmail }}</p>

    <label class="form-label" for="password">Password:</label>
    <input v-model="password" class="form-input" type="password" id="password" placeholder="Password" />
    <p v-if="errorPassword" class="error">{{ errorPassword }}</p>

    <p v-if="error" class="error">{{ error }}</p>

    <input class="form-submit" type="submit" value="Login" />
  </form>
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
.form {
  width: 300px;
  margin: auto;
  padding: 20px;
  background: rgba(19, 35, 47, 0.9);
  border-radius: 5px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}
.form-label {
  display: block;
  margin: 10px 0 5px;
  color: white;
}
.form-input {
  width: 100%;
  padding: 8px;
  border: 1px solid white;
  background: none;
  color: white;
}
.form-submit {
  background: #1ab188;
  border: none;
  color: white;
  padding: 10px;
  margin-top: 10px;
  cursor: pointer;
}
.error {
  color: #ff4a96;
  font-size: 0.9rem;
  margin-top: 5px;
}
</style>
