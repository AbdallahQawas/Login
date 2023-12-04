<template>
  <div>
    <transition name="fade">
      <div>
        <div class="fixed bg-black opacity-70 inset-0 z-20"></div>

        <div
          class="w-full max-w-lg p-3 absolute mx-auto my-auto rounded-xl shadow-lg bg-white z-30"
        >
          <div>
            <div class="text-center p-3 flex-auto justify-center leading-6">
              <slot> </slot>
            </div>
            <div class="p-3 mt-2 text-center space-x-4 md:block">
              <button
                v-if="withSave"
                class="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-md hover:shadow-lg hover:bg-gray-100"
              >
                Save
              </button>
              <button
                @click="onToggle"
                class="mb-2 md:mb-0 bg-blue-500 border border-purple-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-md hover:shadow-lg hover:bg-purple-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts" setup>
type propsType = {
  withSave?: boolean;
};

const props = defineProps<propsType>();

const emit = defineEmits<{
  (e: "onDisplayModal"): void;
}>();

function onToggle() {
  emit("onDisplayModal");
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 500ms ease-out;
}
</style>
