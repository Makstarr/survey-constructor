export { default as Dropdown } from '../../components/dropdown.vue'
export { default as Field } from '../../components/field.vue'
export { default as SurveySection } from '../../components/survey-section.vue'

export const LazyDropdown = import('../../components/dropdown.vue' /* webpackChunkName: "components/dropdown" */).then(c => c.default || c)
export const LazyField = import('../../components/field.vue' /* webpackChunkName: "components/field" */).then(c => c.default || c)
export const LazySurveySection = import('../../components/survey-section.vue' /* webpackChunkName: "components/survey-section" */).then(c => c.default || c)
