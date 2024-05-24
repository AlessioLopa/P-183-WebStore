<script setup>
import { ref } from 'vue'
import api from '@/Services/axios'

const user = ref({})

async function OnSubmit() {
  try {
    await api.login(user.value)
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
    </form>
  </div>
</template>
