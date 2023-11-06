<template>
  <Icon :icon="iconCode" />
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue'

type propsType = {
  iconCode: string
}

const props = defineProps<propsType>()
</script>
