<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from '@/components/HelloWorld.vue';
import logo from '@/assets/logo.png';
</script>

<template>
  <ElImage :src="logo" />
  <HelloWorld
    msg="@hdchan/eslint-config-vue、 @hdchan/tsconfig、@hdchan/create-app-cli demo, base on vue3/vite"
  />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
