<template>
  <div @click="count++">{{ count }}</div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
const count = ref(0)
</script>

<style scoped>

</style>
