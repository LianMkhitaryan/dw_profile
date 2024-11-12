<template>
  <component :is="props.tag" :class="classList">
    <slot />
  </component>
</template>

<script setup lang="ts">
  type Size = 'smallest' | 'extra-small' | 'small' | 'medium' | 'big' | 'extra-big'

  const props = defineProps({
    tag: {
      required: false,
      type: String,
      default: 'div'
    },
    size: {
      required: false,
      type: String as () => Size,
      default: null
    },
    uppercase: {
      required: false,
      type: Boolean,
      default: false
    },
    textCenter: {
      required: false,
      type: Boolean,
      default: false
    }
  })

  const classList = computed(() => {
    const list = ['heading']

    if (props.size) {
      list.push(`size-${props.size}`)
    }

    if (props.uppercase) {
      list.push('uppercase')
    }

    if (props.textCenter) {
      list.push('text-center')
    }

    return list
  })
</script>

<style scoped lang="scss">
  .heading {
    font-weight: var(--font-weight-bold);
    color: var(--black-100);

    &.size-smallest {
      font-size: var(--font-size-extra-small);
      line-height: var(--line-height-extra-small);
    }

    &.size-extra-small {
      font-size: var(--font-size-small);
      line-height: var(--line-height-extra-small);
    }

    &.size-small {
      font-size: var(--font-size-medium);
      line-height: var(--line-height-small);
    }

    &.size-medium {
      font-size: var(--font-size-big);
      line-height: var(--line-height-medium);
    }

    &.size-big {
      font-size: var(--font-size-extra-big);
      line-height: var(--line-height-big);
    }

    &.size-extra-big {
      font-size: var(--font-size-biggest);
      line-height: var(--line-height-extra-big);
    }

    &.uppercase {
      text-transform: uppercase;
    }

    &.text-center {
      text-align: center;
    }
  }
</style>
