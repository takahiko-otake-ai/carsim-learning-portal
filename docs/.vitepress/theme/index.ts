import DefaultTheme from 'vitepress/theme'
import { nextTick, watch } from 'vue'
import { useRoute } from 'vitepress'
import './style.css'

const FLYOUT_STYLE = `
.VPFlyout .menu a,
.VPFlyout .menu a span,
.VPFlyout .menu .VPMenuLink a,
.VPFlyout .menu .VPMenuLink span {
  color: #1a1a1a !important;
  opacity: 1 !important;
}
.VPFlyout .menu a:hover,
.VPFlyout .menu .VPMenuLink a:hover {
  color: #1558d6 !important;
  background-color: #e8effe !important;
}
.VPFlyout .menu a.active,
.VPFlyout .menu .VPMenuLink a.active {
  color: #1558d6 !important;
  font-weight: 700 !important;
  background-color: #e8effe !important;
}
`

function injectFlyoutStyle() {
  if (typeof document === 'undefined') return
  const id = 'carsim-flyout-override'
  if (!document.getElementById(id)) {
    const el = document.createElement('style')
    el.id = id
    el.textContent = FLYOUT_STYLE
    document.head.appendChild(el)
  }
}

export default {
  extends: DefaultTheme,
  setup() {
    const route = useRoute()
    watch(
      () => route.path,
      () => nextTick(injectFlyoutStyle),
      { immediate: true }
    )
  },
}
