<template>
  <div class="flex flex-row w-full bg-white justify-between">
    <div>
      <select
        :disabled="!switchDisable"
        v-model="selectedList"
        name="target"
        class="rounded-md text-blue-500"
        :class="[!switchDisable ? 'border-gray-500' : 'border-blue-500']"
      >
        <option value="Inlet Flow">Inlet Flow</option>
        <option value="abdallah">abdallah</option>
      </select>
    </div>

    <div
      :disabled="!switchDisable"
      class="bg-blue-300 text-white flex justify-center hover:text-white w-16 rounded-md"
      :class="[
        !switchDisable ? 'bg-gray-500' : 'bg-blue-500 hover:bg-blue-700',
      ]"
    >
      <button @click="goClicked">Go</button>
    </div>
    <div class="mt-1 mr-2">
      <button
        @click="disableFilterClicked"
        :class="[
          !switchDisable
            ? 'text-gray-500 hover:text-blue-500'
            : 'text-blue-500',
        ]"
      >
        <icon-wrapper
          class="w-7 h-7"
          icon-code="material-symbols:disabled-by-default-outline"
        ></icon-wrapper>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { DynamicFilterService } from "@/services/dynamic-filter-service/dynamic-filter.service";
import { ArgsService } from "@/services/args-details-service/args-details.service";
import { DFCodeType } from "@/api/PageSettingsAPI/PageSettingsAPI.types";
import IconWrapper from "../icon-wrapper/icon-wrapper.vue";

const argsService = ArgsService();
const dynamicFilterService = DynamicFilterService();

let selectedList = ref<string>("");
let switchDisable = ref<boolean>(false);

function disableFilterClicked() {
  switchDisable.value = !switchDisable.value;
  dynamicFilterService.setDisableFilter(switchDisable.value);
}

function goClicked() {
  dynamicFilterService.setLabel(selectedList.value);
}

async function init() {
  await argsService.loadArgsDetails();
  let temp = argsService.argsDetails;

  dynamicFilterService.setDisableFilter(temp.dynamic_filter?.enable);
  switchDisable.value = temp.dynamic_filter?.enable;

  let labelFilter = temp.dynamic_filter?.filters.filter(
    (item) => (item.code = DFCodeType.label_filter),
  );

  if (labelFilter?.length) {
    selectedList.value = labelFilter[0].args.default_value;
    dynamicFilterService.setLabel(labelFilter[0].args.default_value);
  }
}

onMounted(init);
</script>
