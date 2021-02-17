import Vue from 'vue'

const components = {
  Dropdown: () => import('../../components/dropdown.vue' /* webpackChunkName: "components/dropdown" */).then(c => c.default || c),
  Dropdown: () => import('../../components/dropdown.vue' /* webpackChunkName: "components/dropdown" */).then(c => c.default || c),
  Field: () => import('../../components/field.vue' /* webpackChunkName: "components/field" */).then(c => c.default || c),
  Field: () => import('../../components/field.vue' /* webpackChunkName: "components/field" */).then(c => c.default || c),
  SurveySection: () => import('../../components/survey-section.vue' /* webpackChunkName: "components/survey-section" */).then(c => c.default || c),
  SurveySection: () => import('../../components/survey-section.vue' /* webpackChunkName: "components/survey-section" */).then(c => c.default || c)
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
