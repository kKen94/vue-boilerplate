<script lang="ts" src="./app.ts"></script>
<style lang="scss" src="./app.scss"></style>

<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    |
    <router-link to="/about">About</router-link>
  </div>
  <button class="btn-red">Button</button>
  <router-view />
</template>
