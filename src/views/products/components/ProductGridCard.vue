<script lang="ts" setup>
export interface IProduct {
  id: number;
  image: string;
  title: string;
  price: number;
  category: string;
};

defineProps<{
  product: IProduct;
}>();
</script>

<template>
  <div :class="$style.productGridCard">
    <div :class="$style.productImageContainer">
      <img :src="product.image" :alt="product.title">
    </div>
    <p class="font-semibold text-1g mb-2">{{ product.title }}</p>
    <div class="flex justify-between items-center mt-auto">
      <p class="text-gray-500">{{ product.category }}</p>
      <p>£{{ product.price }}</p>
    </div>
  </div>
</template>

<style module>
.productGridCard {
  @apply bg-white p-4 rounded-md shadow-md flex flex-col;
  &:hover {
    @apply shadow-lg cursor-pointer;
  }
}
.productImageContainer {
  @apply flex items-center justify-center flex-grow mb-8;
}
.productImage {
  max-height: 20rem;
  @apply max-w-full block h-auto mx-auto flex-shrink-0;
}
</style>
