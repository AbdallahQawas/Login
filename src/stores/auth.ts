// // src/store/auth.ts
// import { defineStore } from 'pinia'
// import { useRouter } from 'vue-router'

// const router = useRouter()

// export const useAuthStore = defineStore({
//   id: 'auth',
//   state: () => ({
//     isAuthenticated: localStorage.getItem('isAuthenticated') === 'true',
//     user: localStorage.getItem('user') || null,
//     password: localStorage.getItem('passsword') || null
//   }),
//   actions: {
//     login(username: string, password: string) {
//       if (username === 'abdallah' && password === 'password') {
//         localStorage.setItem('isAuthenticated', 'true')
//         localStorage.setItem('user', username)
//         localStorage.setItem('password', password)
//         return true
//       }
//       return false
//     },
//     logout() {
//       this.isAuthenticated = false
//       localStorage.removeItem('isAuthenticated')
//       localStorage.removeItem('user')
//     }
//   }
// })
