<template>
  <label class="label">
    <slot />
  </label>
</template>

<style scoped lang="scss">
  .label {
    display: block;
    margin-bottom: var(--gap-smallest);
    font-size: var(--font-size-smallest);
    font-weight: var(--font-weight-semi-bold);
    line-height: var(--line-height-smallest);
    color: var(--black-100);
  }
</style>