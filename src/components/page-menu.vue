<template>
  <div class="h-full w-screen relative lg:w-60">
    <div class="bg-sky-500 text-white w-full lg:hidden" @click="hideMenu">
      <icon-wrapper class="h-7 w-7" icon-code="ic:round-close"></icon-wrapper>
    </div>
    <div class="bg-sky-500 items-center h-full w-full lg:w-60 flex flex-col px-6 space-y-1">
      <div class="w-full" v-for="(page, index) in pages" :key="index">
        <button
          @click="reroute(page.name)"
          v-if="!page.subPage"
          class="rounded-md px-4 py-2 flex w-full space-x-2 hover:bg-white hover:text-blue-500 text-white font-semibold"
        >
          <component class="w-5 h-5" :is="isComponent(page.icon || '')"></component>
          <span>
            {{ page.label }}
          </span>
        </button>

        <sub-menu v-if="page.subPage" :page="page"></sub-menu>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
function reroute(routeName: string) {
  return router.push(routeName)
}
const router = useRouter()
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import subMenu from './sub-menu.vue'
import iconifyDashboard from '@/icons/iconify-dashboard.vue'
import iconifyWater from '@/icons/iconify-water.vue'
import iconifyControlCenter from '@/icons/iconify-control-center.vue'
import iconifyEpanetDemo from '@/icons/iconify-epanet-demo.vue'
import iconifyAlerts from '@/icons/iconify-alerts.vue'
import iconifyZones from '@/icons/iconify-zones.vue'
import iconifyMonitoring from '@/icons/iconify-monitoring.vue'
import iconifyReports from '@/icons/iconify-reports.vue'
import iconifyLosses from '@/icons/iconify-losses.vue'
import iconifyDevices from '@/icons/iconify-devices.vue'
import iconifyPredictions from '@/icons/iconify-predictions.vue'
import iconifyAnomalies from '@/icons/iconify-anomalies.vue'
import iconifyOnDemand from '@/icons/iconify-on-demand.vue'
import iconifyIncidents from '@/icons/iconify-incidents.vue'
import iconifyOctopo from '@/icons/iconify-octopo.vue'
import iconWrapper from './icon-wrapper/icon-wrapper.vue'

const emit = defineEmits<{
  (e: 'toggleMenu'): void
}>()

function hideMenu() {
  emit('toggleMenu')
}

function isComponent(name: string) {
  let temp = {
    iconifyDashboard,
    iconifyWater,
    iconifyControlCenter,
    iconifyEpanetDemo,
    iconifyAlerts,
    iconifyLosses,
    iconifyPredictions,
    iconifyAnomalies,
    iconifyOnDemand,
    iconifyIncidents,
    iconifyOctopo,
    iconifyMonitoring,
    iconifyReports,
    iconifyDevices,
    iconifyZones
  }
  return temp[name]
}

export type pageType = {
  name: string
  label: string
  subPage?: subPageType[]
  icon?: string
}
export type subPageType = {
  label: string
}

let pages = ref<pageType[]>([
  {
    name: 'dashboard',
    label: 'Dashboard',
    icon: 'iconifyDashboard'
  },
  {
    name: 'waterquality',
    label: 'Water Quality',
    icon: 'iconifyWater'
  },
  {
    name: 'control-center',
    label: 'Control Center',
    icon: 'iconifyControlCenter',
    subPage: []
  },
  {
    name: 'panetdemo',
    label: 'panet Demo',
    icon: 'iconifyEpanetDemo',
    subPage: [
      {
        label: 'Epanet Demo'
      },
      {
        label: 'Model View'
      },
      {
        label: 'Default View'
      }
    ]
  },
  {
    name: 'alerts',
    label: 'Alerts',
    icon: 'iconifyAlerts'
  },
  {
    name: 'zones',
    label: 'Zones',
    icon: 'iconifyZones',
    subPage: []
  },
  {
    name: 'monitoring',
    label: 'Monitoring',
    icon: 'iconifyMonitoring',
    subPage: []
  },
  {
    name: 'reports',
    label: 'Reports',
    icon: 'iconifyReports',
    subPage: []
  },
  {
    name: 'losses',
    label: 'Losses',
    icon: 'iconifyLosses'
  },
  {
    name: 'devices',
    label: 'Devices',
    icon: 'iconifyDevices',
    subPage: []
  },
  {
    name: 'predeictions',
    label: 'Predictions',
    icon: 'iconifyPredictions'
  },
  {
    name: 'anomalies',
    label: 'Anomalies',
    icon: 'iconifyAnomalies'
  },
  {
    name: 'ondemand',
    label: 'On Demand',
    icon: 'iconifyOnDemand'
  },
  {
    name: 'incidents',
    label: 'Incidents',
    icon: 'iconifyIncidents'
  },
  {
    name: 'octopo',
    label: 'Octopo',
    icon: 'iconifyOctopo'
  }
])
</script>
