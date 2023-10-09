<template>
  <div class="bg-white fl-width p-5 rounded-xl shadow text-blue-500">
    <div class="w-72">
      <p class="font-bold text-2xl mb-4">Login</p>
      <p class="text-sm">Enter your Details below to continue</p>

      <form class="flex flex-col my-4">
        <input
          class="focus:outline-none border-b-2 focus:border-blue-400 my-1"
          type="ID"
          placeholder="Tenant ID"
        />
        <input
          class="focus:outline-none border-b-2 focus:border-blue-400 my-1"
          type="email"
          placeholder="Username"
        />
        <input
          class="focus:outline-none border-b-2 focus:border-blue-400 my-1"
          type="password"
          placeholder="Password"
        />
      </form>

      <button
        id="login"
        class="border-solid border-2 border-blue-500 hover:text-white hover:bg-blue-500 px-4 py-1 w-full rounded-md"
      >
        Log IN
      </button>
    </div>
    <div class="flex justify-between">
      <p class="my-auto">Contact sppourt</p>
      <img class="w-16 h-16" src="../assets/images/flowless.png" />
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.fl-width {
  @apply w-[28rem];
}
</style>
