<template>
  <component :is="icons[toPascalCase(props.name) + 'Icon']" :class="classList" />
</template>

<script setup lang="ts">
  import { toPascalCase } from '~/utils/textFormatting'

  import CloseIcon from '@/assets/images/icons/close.svg'
  import PlusIcon from '@/assets/images/icons/plus.svg'
  import HomeIcon from '@/assets/images/icons/home.svg'
  import ToolsIcon from '@/assets/images/icons/tools.svg'
  import AvatarIcon from '@/assets/images/icons/avatar.svg'

  type Size = 'small' | 'medium' | 'big'

  const props = defineProps({
    name: {
      required: true,
      type: String
    },
    size: {
      required: false,
      type: String as () => Size,
      default: 'medium'
    }
  })

  const classList = computed(() => {
    return ['icon', `size-${props.size}`]
  })

  const icons: { [key: string]: any } = {
    CloseIcon,
    PlusIcon,
    HomeIcon,
    ToolsIcon,
    AvatarIcon
  }
</script>

<style scoped lang="scss">
  .icon {
    &.size-small {
      // TODO: sizes
    }

    &.size-medium {
      width: 24px;
      height: 24px;
    }

    &.size-big {
      width: 28px;
      height: 28px;
    }

    :deep(path) {
      transition: all var(--transition-fast);
    }
  }
</style>
