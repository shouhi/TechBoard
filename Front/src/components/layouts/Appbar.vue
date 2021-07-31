<template>
  <header
    class="
      flex
      items-center
      justify-between
      px-6
      py-4
      bg-white
      border-b-4 border-techuni
    "
  >
    <div class="flex items-center">
      <button
        @click="isOpen = true"
        class="text-gray-500 focus:outline-none lg:hidden"
      >
        <svg
          class="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 6H20M4 12H20M4 18H11"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>

    <div class="flex items-center">
      <div class="relative">
        <button
          @click="dropdownOpen = !dropdownOpen"
          class="
            relative
            z-10
            block
            w-12
            h-12
            overflow-hidden
            rounded-full
            shadow
            focus:outline-none
          "
        >
          <!-- Cloud Strageからユーザーアイコン取得（？） -->
          <img
            class="object-cover w-full h-full"
            src="https://firebasestorage.googleapis.com/v0/b/member-site-2d26e.appspot.com/o/images%2F1hG7rKElKqNwhfxJMcOlz2xMLXk2.jpg?alt=media&token=7c022f8d-91b2-46f3-95e1-52ab6b6a0c06"
            alt="Avatar"
          />
        </button>

        <div
          v-show="dropdownOpen"
          @click="dropdownOpen = false"
          class="fixed inset-0 z-10 w-full h-full"
        ></div>

        <transition
          enter-active-class="transition duration-150 ease-out transform"
          enter-from-class="scale-95 opacity-0"
          enter-to-class="scale-100 opacity-100"
          leave-active-class="transition duration-150 ease-in transform"
          leave-from-class="scale-100 opacity-100"
          leave-to-class="scale-95 opacity-0"
        >
          <div
            v-show="dropdownOpen"
            class="
              absolute
              right-0
              z-20
              w-48
              py-2
              mt-2
              bg-white
              rounded-md
              shadow-xl
            "
          >
            <a
              href="#"
              class="
                block
                px-4
                py-2
                text-sm text-gray-700
                hover:bg-indigo-600 hover:text-white
              "
              >Profile</a
            >
            <a
              href="#"
              @click="signout()"
              class="
                block
                px-4
                py-2
                text-sm text-gray-700
                hover:bg-indigo-600 hover:text-white
              "
            >
              Logout
            </a>
          </div>
        </transition>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useSidebar } from '../../hooks/useSidebar'
import { useAuthStore } from '../../store/auth'

export default defineComponent({
  setup() {
    const dropdownOpen = ref(false)
    const { isOpen } = useSidebar()
    const { signout } = useAuthStore()
    return {
      isOpen,
      dropdownOpen,
      signout,
    }
  },
})
</script>
