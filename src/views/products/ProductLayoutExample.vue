<script lang="ts" setup>
import { computed } from "vue";
import ProductGridCard from "./components/ProductGridCard.vue";
import ProductListCard from "./components/ProductListCard.vue";
import { ProductLayout, useProductLayout } from "../../views/products/composables/useProductLayout";
// JSON data import
import products from "./products.json";

const { layout, setLayout, LAYOUTS } = useProductLayout();

const productLayoutComponents = {
  [LAYOUTS.grid]: ProductGridCard,
  [LAYOUTS.list]: ProductListCard,
};

const productCardComponent = computed(() =>
  productLayoutComponents[layout.value],
);
</script>

<template>
  <div>
    <div class="space-x-4 mb-8 mx-auto flex justify-center items-center mt-4">
      <button @click.prevent="setLayout(LAYOUTS.grid)">Grid</button>
      <button @click.prevent="setLayout(LAYOUTS.list)">List</button>
    </div>
    <ProductLayout>
      <component
        :is="productCardComponent"
        v-for="product of products"
        :key="product.id"
        :product="product"
      />
    </ProductLayout>
  </div>
</template>
