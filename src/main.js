import Vue from 'vue'
import VueScreen from 'vue-screen'
// import VueScrollactive from 'vue-scrollactive'
import Scrollactive from 'vue-scrollactive/src/scrollactive.vue';

import store from './store'
import { getData } from './import.js'

// import Map from './components/Map'
import DataBox from './components/DataBox'
import LineChart from './components/LineChart'
import MultiLineChart from './components/MultiLineChart'
import BarChart from './components/BarChart'
import PieChart from './components/PieChart'
import MapChart from './components/MapChart'
import Table from './components/Table'
import GeoList from './components/GeoList'
import ChartMapPanel from './components/ChartMapPanel'
import PageContent from './components/PageContent'
import MenuContent from './components/MenuContent'
import MapPoint from './components/MapPoint'

import vueCustomElement from 'vue-custom-element'

Vue.use(VueScreen, {
  sm: '36em',
  md: '48em',
  lg: '62em'
})

// Vue.use(VueScrollactive)
Vue.component('scrollactive', Scrollactive)

Vue.use(getData(store))

Vue.config.productionTip = false

Vue.use(vueCustomElement)

// Vue.customElement('da-map', Map)
Vue.customElement('data-box', DataBox)
Vue.customElement('line-chart', LineChart)
Vue.customElement('multiline-chart', MultiLineChart)
Vue.customElement('bar-chart', BarChart)
Vue.customElement('pie-chart', PieChart)
Vue.customElement('map-chart', MapChart)
Vue.customElement('geo-list', GeoList)
Vue.customElement('chart-map-panel', ChartMapPanel)
Vue.customElement('page-content', PageContent)
Vue.customElement('menu-content', MenuContent)
Vue.customElement('map-point', MapPoint)
