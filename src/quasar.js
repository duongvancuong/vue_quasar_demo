import Vue from 'vue'

import './styles/quasar.sass'
import '@quasar/extras/material-icons/material-icons.css'
import {
  Quasar,
  QLayout,
  QPageContainer,
  QPage,
  QHeader,
  QFooter,
  QDrawer,
  QPageSticky,
  QPageScroller
} from 'quasar'

Vue.use(Quasar, {
  config: {},
  components: {
    QLayout,
    QPageContainer,
    QPage,
    QHeader,
    QFooter,
    QDrawer,
    QPageSticky,
    QPageScroller,
  },
  directives: { /* not needed if importStrategy is not 'manual' */ },
  plugins: {
  }
 })
