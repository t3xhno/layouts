<script lang="ts" setup>
// import { computed } from "vue";
// import { useProductLayout, LAYOUTS } fro../views/products/composables/useProductLayoutout";
// Component imports
// import GridLayout from "./components/GridLayout.vue";
// import ListLayout from "./components/ListLayout.vue";

const props = defineProps<{
  useLayout: unknown;
}>();

const { layout, currentLayoutComponent } = props.useLayout();

// const layoutComponents = {
//   [LAYOUTS.grid]: GridLayout,
//   [LAYOUTS.list]: ListLayout,
// };

// const { layout } = useProductLayout();

// const currentLayoutComponent = computed(() =>
//   layoutComponents[layout.value],
// );
</script>

<template>
  <component :is="currentLayoutComponent">
    <template
      v-for="slotName in Object.keys($slots)"
      :key="slotName"
      v-slot:[slotName]="slotProps"
    >
      <slot :name="slotName" :layout="layout" v-bind="slotProps" />
    </template>
  </component>
</template>
