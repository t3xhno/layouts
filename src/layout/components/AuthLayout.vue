<script lang="ts" setup></script>

<template>
  <div class="container mx-auto" :class="$style.authLayout">
    <main :class="$style.content">
      <slot name="content" />
    </main>
    <footer :class="$style.footer">
      <slot name="footer" />
    </footer>
  </div>
</template>

<style module>
.authLayout {
  display: grid;
  height: 600px;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 4rem;
  @apply bg-purple-300;
}

.footer,
.content {
  display: grid;
  place-items: center;
}

.content {
  grid-area: 1 / 1 / 2 / 2;
  @apply bg-purple-300;
}

.footer {
  grid-area: 2 / 1 / 3 / 2;
  @apply bg-gray-400;
}
</style>
