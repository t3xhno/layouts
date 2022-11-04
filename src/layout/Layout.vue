<script lang="ts" setup>
import { Component as IComp, computed } from "vue";
// import { layoutComputed, LAYOUTS } from "./services/pageLayoutService";
import { useLayout } from "./composables/useLayout";
// Component imports
import AuthLayout from './components/AuthLayout.vue';
import StandardLayout from './components/StandardLayout.vue';

export interface ILayout {
  [key: symbol]: IComp;
};

const { layout, LAYOUTS } = useLayout();

const layoutComponents: ILayout = {
  [LAYOUTS.auth]: AuthLayout,
  [LAYOUTS.standard]: StandardLayout,
};

const currentLayoutComponent = computed(() =>
  layoutComponents[layout.value],
);
</script>

<template>
  <!-- Render the appropriate layout component -->
  <component :is="currentLayoutComponent">
    <!-- Pass through all the slots -->
    <template
      v-for="slotName in Object.keys($slots)"
      :key="slotName"
      v-slot:[slotName]="slotProps"
    >
      <slot :name="slotName" v-bind="slotProps" />
    </template>
  </component>
</template>
