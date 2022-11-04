<script lang="ts" setup></script>

<template>
  <div class="container mx-auto" :class="$style.standardLayout">
    <header :class="$style.header">
      <slot name="header" />
    </header>
    <aside :class="$style.aside">
      <slot name="aside" />
    </aside>
    <main :class="$style.content">
      <slot name="content" />
    </main>
    <footer :class="$style.footer">
      <slot name="footer" />
    </footer>
  </div>
</template>

<style module>
.standardLayout {
  display: grid;
  height: 600px;
  grid-template-columns: 1fr 4fr;
  grid-template-rows: 4rem 1fr 4rem;
}

.aside,
.header,
.footer,
.content {
  display: grid;
  place-items: center;
}

.header {
  grid-column: span 2;
  @apply bg-green-200;
}

.aside {
  @apply bg-indigo-200;
}

.content {
  @apply bg-purple-200;
}

.footer {
  grid-column: span 2;
  @apply bg-gray-400;
}
</style>
