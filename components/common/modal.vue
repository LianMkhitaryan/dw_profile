<template>
  <div class="modal">
    <div class="modal-box">
      <div class="modal-header">
        <button class="modal-close">
          X
        </button>
        <base-heading class="modal-heading" size="smallest" :uppercase="true" :text-center="true">
          <slot name="heading" />
        </base-heading>
      </div>
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">
  .modal {
    position: fixed;
    inset: 0;
    display: flex;
    align-items: flex-end;
    background: rgba(0, 0, 0, 0.35);
    padding-top: var(--gap-medium);

    &-box {
      width: 100%;
      background: var(--white-100);
      border-radius: var(--radius-medium) var(--radius-medium) 0 0;
      padding: var(--gap-medium);
    }

    &-header {
      display: flex;
      align-items: center;
      margin-bottom: var(--gap-medium);
    }

    &-close {
      flex-shrink: 0;
    }

    &-heading {
      flex-grow: 1;
      margin-left: var(--gap-small);
      margin-right: calc(var(--gap-small) + 36px);
    }
  }
</style>
<script setup lang="ts">
</script>