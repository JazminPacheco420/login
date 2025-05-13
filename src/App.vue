<template>
  <!--<div>
    <nav>
      <router-link to="/login">Iniciar sesión</router-link>
      <router-link to="/register">Registrarse</router-link>
    </nav>
    
  </div>-->
  <router-view></router-view>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
nav {
  display: flex;
  gap: 20px;
  justify-content: center;
  margin: 20px;
}
</style>
