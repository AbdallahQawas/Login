<template>
  <div>
    <div class="bg-sky-500 h-full flex flex-col px-6 space-y-1">
      <div class="w-48" v-for="(page, index) in pages" :key="index">
        <button
          @click="reroute(page.label)"
          v-if="!page.subPage"
          class="rounded-md px-4 py-2 flex place-items-center space-x-2 hover:bg-white hover:text-blue-500 text-white font-semibold"
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
function reroute(test: string) {
  return router.push(test)
}
const router = useRouter()
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import pageTest from './page-test.vue'
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
import PageTemplate from './page-template.vue'

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
  label: string
  subPage?: subPageType[]
  icon?: string
}
export type subPageType = {
  label: string
}

let pages = ref<pageType[]>([
  {
    label: 'Dashboard',
    icon: 'iconifyDashboard'
  },
  {
    label: 'Water Quality',
    icon: 'iconifyWater'
  },
  {
    label: 'Control Center',
    icon: 'iconifyControlCenter',
    subPage: []
  },
  {
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
    label: 'Alerts',
    icon: 'iconifyAlerts'
  },
  {
    label: 'Zones',
    icon: 'iconifyZones',
    subPage: []
  },
  {
    label: 'Monitoring',
    icon: 'iconifyMonitoring',
    subPage: []
  },
  {
    label: 'Reports',
    icon: 'iconifyReports',
    subPage: []
  },
  {
    label: 'Losses',
    icon: 'iconifyLosses'
  },
  {
    label: 'Devices',
    icon: 'iconifyDevices',
    subPage: []
  },
  {
    label: 'Predictions',
    icon: 'iconifyPredictions'
  },
  {
    label: 'Anomalies',
    icon: 'iconifyAnomalies'
  },
  {
    label: 'On Demand',
    icon: 'iconifyOnDemand'
  },
  {
    label: 'Incidents',
    icon: 'iconifyIncidents'
  },
  {
    label: 'Octopp',
    icon: 'iconifyOctopo'
  }
])
</script>
