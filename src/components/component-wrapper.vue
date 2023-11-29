<template>
  <div>
    <div class="flex w-full justify-between bg-gray-100 p-4">
      <div class="font-bold text-blue-600">
        {{ title }}
      </div>
      <div class="flex flex-row items-center">
        <button
          class="text-gray-500 hover:text-blue-600"
          @click="expandClicked"
          v-if="!expand"
        >
          <icon-wrapper class="m-2" icon-code="iconoir:expand"></icon-wrapper>
        </button>
        <slot name="slot1"> </slot>
      </div>
    </div>
    <div class="text-blue-600" :id="uniqueIdParent">
      <div class="bg-white rounded-b-md h-full w-full" :id="uniqueIdChild">
        <slot name="slot2"> </slot>
      </div>
    </div>
  </div>
  <full-screen
    v-if="display"
    @on-close-clicked="expandClicked"
    @on-init-finished="handleAppend"
  ></full-screen>
</template>

<script lang="ts" setup>
import fullScreen from "@/components/full-screen/full-screen.vue";
import iconWrapper from "./icon-wrapper/icon-wrapper.vue";
import { ref } from "vue";

type propsType = {
  title: string;
  expand?: boolean;
};

const props = defineProps<propsType>();

let display = ref(false);

let uniqueIdParent = ref("parent" + new Date().getTime() * Math.random());
let uniqueIdChild = ref("child" + new Date().getTime() * Math.random());

function handleAppend() {
  let modalContainer = document.getElementById("fullModalContainer");
  let parentDiv = document.getElementById(uniqueIdParent.value);
  let childDiv = document.getElementById(uniqueIdChild.value);

  if (childDiv) {
    if (display.value) {
      modalContainer?.appendChild(childDiv);
    } else {
      parentDiv?.appendChild(childDiv);
    }
  }
}

function expandClicked() {
  display.value = !display.value;
  handleAppend();
}
</script>
