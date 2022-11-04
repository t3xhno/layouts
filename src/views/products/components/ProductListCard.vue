<script lang="ts" setup>
import { IProduct } from './ProductGridCard.vue';

defineProps<{
  product: IProduct;
}>();
</script>

<template>
  <div :class="$style.productListCard">
    <div :class="$style.productImageContainer">
      <img :src="product.image" :alt="product.title">
    </div>
    <div class="px-4">
      <div class="flex flex-col h-full">
        <p class="font-semibold text-2xt mb-2">{{ product.title }}</p>
        <div class="h-full flex flex-col justify-between">
          <p class="text-x1">£{{ product.price }}</p>
          <div class="text-gray-500">{{ product.category }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style module>
.productListCard {
  @apply bg-white p-4 rounded-md shadow-md mb-4 flex justify-start;
  &:hover {
    @apply shadow-lg cursor-pointer;
  }
}
.productImageContainer {
  @apply w-20 mr-4 flex items-center justify-center flex-shrink-0;
}
.productImage {
  @apply max-w-full max-h-full block h-auto mx-4;
}
</style>
