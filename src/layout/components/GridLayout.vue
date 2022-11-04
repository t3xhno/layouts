<template>
  <div :class="$style.gridLayout">
    <slot />
  </div>
</template>

<style module>
.gridLayout {
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  @apply gap-8 grid;
}
</style>
