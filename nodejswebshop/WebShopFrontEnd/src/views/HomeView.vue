<script setup>
import { ref } from 'vue'
import axios from '@/Services/axios'

const user = ref({})
let Successful = false
async function OnSubmit() {
  try {
    await axios.login(user.value)
    Successful = true
    console.log(Successful)
  } catch (error) {
    console.log(error)
  }
}
</script>

<template>
  <div>
    <form @submit.prevent="OnSubmit">
      <input type="text" placeholder="Username" v-model="user.username" />
      <input type="text" placeholder="Password" v-model="user.password" />
      <button>Submit</button>
      <p v-show="Successful">Connected Successful</p>
    </form>
  </div>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}
</style>
