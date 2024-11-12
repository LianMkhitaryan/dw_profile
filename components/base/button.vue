<template>
	<component :is="props.tag" v-if="tag !== 'nuxt-link'" :class="classList" v-bind:type="$props.tag === 'button' ? 'button' : null">
	  <slot />
	</component>
	<nuxt-link v-else :class="classList">
	  <slot />
	</nuxt-link>
</template>
  
<script setup lang="ts">
  type Size = 'small' | 'medium' | 'big'
  type Theme = 'standard' | 'outline' | 'accent' | 'text'
  type Radius = 'standard' | 'full'

  const props = defineProps({
    tag: {
      required: false,
      type: String,
      default: 'button'
    },
    size: {
      required: false,
      type: String as () => Size,
      default: 'medium'
    },
    theme: {
      required: false,
      type: String as () => Theme,
      default: 'standard'
    },
    radius: {
      required: false,
      type: String as () => Radius,
      default: 'standard'
    }
  })

  const classList = computed(() => {
    return [`button`, `size-${props.size}`, `theme-${props.theme}`, `radius-${props.radius}`]
  })
</script>

<style scoped lang="scss">
  .button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-weight: var(--font-weight-bold);
    line-height: var(--line-height-extra-small);
    text-align: center;
    text-decoration: none;
    outline: 0;
    transition: all var(--transition-fast);

    &:not(:disabled) {
      cursor: pointer;

      &:active {
        transform: translateY(1px);
      }
    }

    // Sizes
    &.size-small {
      min-height: 36px;
      padding: 4px 20px;
      font-size: var(--font-size-extra-small);
      border-radius: 1000px;
    }

    &.size-medium {
      min-height: 44px;
      padding: var(--gap-smallest) var(--gap-medium);
      font-size: var(--font-size-small);
      border-radius: 1000px;
    }

    &.size-big {
      min-height: 60px;
      padding: var(--gap-extra-small) 28px;
      font-size: var(--font-size-small);
      border-radius: var(--radius-small);
    }

    // Themes
    &.theme-standard {
      color: var(--white-100);
      background: var(--black-100);

      &:disabled {
        background: var(--bombay-300);
      }

      &:not(:disabled) {
        &:hover {
          @include hover {
            background: var(--bombay-950);
          }
        }

        &:focus-visible {
          outline: 4px solid var(--black-100);
        }
      }
    }

    &.theme-outline {
      color: var(--black-100);
      border: 2px solid var(--black-100);

      &:disabled {
        color: var(--bombay-300);
        border-color: var(--bombay-300);
      }

      &:not(:disabled) {
        &:hover {
          @include hover {
            background: var(--bombay-100);
          }
        }

        &:focus-visible {
          background: var(--bombay-100);
          outline: 4px solid var(--black-100);
        }

        &:active {
          background: var(--bombay-200);
        }
      }
    }

    &.theme-accent {
      color: var(--white-100);
      background: var(--accent-default);

      &:disabled {
        background: var(--bombay-300);
      }

      &:not(:disabled) {
        &:hover {
          @include hover {
            background: var(--radical-red-600);
          }
        }

        &:focus-visible {
          outline: 4px solid var(--radical-red-950);
        }
      }
    }

    &.theme-text {
      color: var(--black-100);
      padding-left: 0;
      padding-right: 0;

      &:disabled {
        color: var(--bombay-300);
      }

      &:not(:disabled) {
        text-decoration: underline;
        text-underline-offset: 3px;
        text-decoration-thickness: 2px;

        &:focus-visible {
          outline: 4px solid var(--black-100);
        }
      }
    }
  }
</style>