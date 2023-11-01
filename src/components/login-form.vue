<template>
  <div class="bg-gray-200 flex justify-center items-center h-screen">
    <div class="bg-white fl-width p-5 rounded-xl shadow text-blue-500">
      <div class="w-80">
        <p class="font-bold text-2xl mb-4">Login</p>
        <p class="text-sm">Enter your Details below to continue</p>

        <form class="flex flex-col my-4 w-52">
          <input
            class="focus:outline-none border-b-2 focus:border-blue-400 my-1"
            type="ID"
            placeholder="Tenant ID"
          />
          <input
            class="focus:outline-none border-b-2 focus:border-blue-400 my-1"
            placeholder="Username"
            v-model="username"
          />
          <input
            class="focus:outline-none border-b-2 focus:border-blue-400 my-1"
            placeholder="Password"
            v-model="password"
            type="password"
          />
        </form>
        <button
          @click="login"
          id="login"
          type="submit"
          class="border-solid border-2 border-blue-500 hover:text-white hover:bg-blue-500 px-4 py-1 w-52 rounded-md"
        >
          Log IN
        </button>
      </div>
      <div class="flex justify-between">
        <p class="my-auto">Contact sppourt</p>
        <img class="w-16 h-16" src="../assets/images/flowless.png" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const username = ref('')
const password = ref('')

function login() {
  if (username.value === 'abdallah' && password.value === '123') {
    localStorage.setItem('username', username.value)
    localStorage.setItem('password', password.value)
    localStorage.setItem('Authentication', 'true')
    localStorage.setItem('Authorization', 'false')
    router.push('/')
  }
}
</script>
