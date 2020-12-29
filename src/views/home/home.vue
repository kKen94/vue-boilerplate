<script lang="ts" src="./home.ts"></script>
<style scoped lang="scss" src="./home.scss"></style>

<template>
  <div class="home">
    <img alt="Vue logo" src="src/assets/logo.png">
    <HelloWorld :msg="$t('components.hello-world.msg')"/>
    <label>
      <select v-model="$i18n.locale">
        <option
          v-for="(o, i) in LOCALES"
          :key="i"
          :value="o.value"
          :selected="o.value === defaultLocale"
        >{{ o.caption }}</option
        >
      </select>
    </label>
  </div>
</template>
