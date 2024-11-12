<template>
  <div class="container">
    <slot />
  </div>
</template>

<style scoped lang="scss">
  .container {
    width: 100%;
    padding-left: var(--gap-medium);
    padding-right: var(--gap-medium);
  }
</style>
