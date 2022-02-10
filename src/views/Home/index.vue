<template>
  <div class="id">Home {{ store.getters.GET_NAME }}</div>
  <div class="id">Home {{ store.state.userName }}</div>
</template>

<script setup lang="ts">
// @/* -> tsconfig.json 中配置 bathUrl path
import { useStore } from '@/store'
import { fetchUsers } from '@/api'

const store = useStore()

async function fetchOriginUsers() {
  const res = await fetchUsers()
  console.log(res)
}

fetchOriginUsers()
</script>

<style lang="less" scoped></style>
