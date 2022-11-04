<script lang="ts" setup>
import Layout from "../layout/Layout.vue";
// import { LAYOUTS, setLayout } from "../layout/services/pageLayoutService";
import { useLayout } from "../layout/composables/useLayout";

const { setLayout, LAYOUTS } = useLayout();
</script>

<template>
  <div>
    <div class="space-x-4 mb-8 mx-auto flex justify-center items-center mt-4">
      <button @click.prevent="setLayout(LAYOUTS.standard)">Standard</button>
      <button @click.prevent="setLayout(LAYOUTS.auth)">Auth</button>
    </div>
    <Layout class="mx-auto max-w-7x1">
      <template #header>
        <p>Header</p>
      </template>
      <template #content>
        <p>Content</p>
      </template>
      <template #aside>
        <p>Aside</p>
      </template>
      <template #footer>
        <p>Footer</p>
      </template>
    </Layout>
  </div>
</template>
