<script>
import { ref } from 'vue'
import axios from '@/Services/axios'

const users = ref({})
try {
  axios.getAdmin().then((response) => {
    users.value = response.data.result
    console.log(users.value)
  })
} catch (error) {
  console.log(error)
}
</script>

<template>
  <div class="users" v-for="user in users" :key="user.id">
    <h1>{{ user.username }}</h1>
    <p>{{ user.email }}</p>
  </div>
</template>

<style scoped>
.users {
  color: white;
}
</style>
