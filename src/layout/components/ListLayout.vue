<template>
  <div :class="$style.listLayout">
    <slot />
  </div>
</template>

<style module>
.listLayout {
  & > * {
    min-height: 150px;
  }
}
</style>
