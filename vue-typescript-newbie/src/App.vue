<template>
  <my-header />
  {{ user }}
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/login">Login</router-link> |
    <router-link to="/board/write">Board</router-link>
  </nav>
  <router-view :user="user" @changeUser="toggleUser" />
</template>

<script setup lang="ts">
import { ref } from "vue";
import MyHeader from "@/components/layout/MyHeader.vue";

const defaultName = "Tykan";

const user = ref(defaultName);

function toggleUser() {
  if (user.value == defaultName) {
    user.value = "Taeyoon";
  } else {
    user.value = defaultName;
  }
  console.log(`${user.value}로 유저가 변경되었습니다!`);
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0;
}

nav {
  padding: 20px;
  margin: 0;
  width: 100%;
  background-color: rgba(10, 10, 10, 0.2);
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
