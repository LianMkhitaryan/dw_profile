<template>
  <div class="accordion-item">
    <button class="accordion-button" :class="{ open: isOpen }" type="button" @click="updateIsOpen(!isOpen)">
      <slot name="title" />
      <base-icon class="accordion-icon" name="plus" size="big" />
    </button>
    <common-transition-slide-down :condition="isOpen">
      <div>
        <div class="accordion-body">
          <slot name="body" />
        </div>
      </div>
    </common-transition-slide-down>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps({
    open: {
      required: false,
      type: Boolean,
      default: false
    }
  })

  const isOpen = ref(props.open)
  const updateIsOpen = (value: boolean) => {
    isOpen.value = value
  }
</script>

<style scoped lang="scss">
  .accordion-item {
    font-size: var(--font-size-small);
    line-height: var(--line-height-medium);
  }

  .accordion-button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    font-weight: var(--font-weight-bold);
    color: var(--black-100);

    &.open {
      .accordion-icon {
        // TODO: minus icon
      }
    }
  }

  .accordion-icon {
    flex-shrink: 0;
    margin-left: var(--gap-extra-small);

    :deep(path) {
      fill: var(--black-100);
    }
  }

  .accordion-body {
    color: var(--bombay-700);
    margin-top: var(--gap-extra-small);
  }
</style>
