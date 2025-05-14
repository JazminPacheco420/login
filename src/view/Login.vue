<template>
  <div class="login">
    <h1 class="title">Iniciar sesión en Mi Gurú</h1>
    <LoginForm />
  </div>
</template>

<script>
import LoginForm from "@/components/LoginForm.vue";

export default {
  components: {
    LoginForm,
  },
};
</script>

<style scoped>
.login {
  padding: 1rem;
  text-align: center;
}
</style>
