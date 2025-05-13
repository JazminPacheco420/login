<template>
  <div class="register">
    <h1 class="title">Registrarse</h1>
    <RegisterForm @register="registerUser" />
  </div>
</template>

<script>
import RegisterForm from "@/components/RegisterForm.vue";

export default {
  components: { RegisterForm },
  methods: {
    async registerUser(userData) {
      try {
        const response = await fetch("http://localhost:3000/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userData),
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

<style scoped>
.register {
  padding: 2rem;
  text-align: center;
}
</style>
