<template>
	<component :is="props.tag" v-if="tag !== 'nuxt-link'" :class="classList" v-bind:type="$props.tag === 'button' ? 'button' : null">
	  <slot />
	</component>
	<nuxt-link v-else :class="classList">
	  <slot />
	</nuxt-link>
  </template>
  
  <script setup lang="ts">
	type Size = 'small' | 'medium'
	type Theme = 'primary' | 'secondary' | 'accent' 
  
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
		default: 'primary'
	  }
	})
  
	const classList = computed(() => {
	  return [`button`, `size-${props.size}`, `theme-${props.theme}`]
	})
  </script>
  
  <style scoped lang="scss">
	.button {
	  display: inline-flex;
	  justify-content: center;
	  align-items: center;
	  font-size: var(--font-size-extra-small);
	  font-weight: var(--font-weight-bold);
	  line-height: var(--line-height-extra-big);
	  text-align: center;
	  text-decoration: none;
	  border-radius: 1000px;
	  outline: 0;
	  transition: background var(--transition-fast);
  
	  &:not(:disabled) {
		cursor: pointer;
  
		&:active {
		  transform: translateY(1px);
		}
	  }
  
	  // Sizes
	  &.size-small {
		min-height: 44px;
		padding: var(--gap-smallest) var(--gap-medium);
	  }
  
	  &.size-medium {
		min-height: 56px;
		padding: var(--gap-extra-small) var(--gap-extra-big);
	  }
  
	  // Themes
	  &.theme-standard {
		color: var(--true-gray-50);
		background: var(--true-gray-900);
		border: 2px solid var(--true-gray-900);
  
		&:disabled {
		  color: var(--true-gray-500);
		  background: var(--true-gray-300);
		}
  
		&:not(:disabled) {
		  &:hover {
			@include hover {
			  background: var(--true-gray-700);
			}
		  }
  
		  &:focus-visible {
			background: var(--true-gray-700);
			border-color: var(--true-gray-700);
			outline: 4px solid var(--true-gray-900);
		  }
		}
	  }
  
	  &.theme-outline {
		color: var(--black-100);
		border: 2px solid var(--black-100);
  
		&:disabled {
		  color: var(--true-gray-400);
		  border-color: var(--true-gray-300);
		}
  
		&:not(:disabled) {
		  &:hover {
			@include hover {
			  background: var(--bombay-100);
			}
		  }
  
		  &:focus-visible,
		  &:active {
			background: var(--bombay-100);
		  }
		}
	  }
  
	  &.theme-accent {
		color: var(--white-100);
		background: linear-gradient(to right, #FF3264, #FF850A);
  
		&:not(:disabled) {
		  &:hover {
			@include hover {
			  background: linear-gradient(to right, var(--radical-red-500), var(--radical-red-500));
			}
		  }
		}
	  }
  
	  &.theme-text {
		color: var(--true-gray-700);
		padding-left: 0;
		padding-right: 0;
  
		&:disabled {
		  color: var(--true-gray-400);
		}
  
		&:not(:disabled) {
		  &:hover {
			@include hover {
			  color: var(--true-gray-900);
			  text-decoration: underline;
			  text-decoration-thickness: 2px;
			  text-underline-offset: 4px;
			}
		  }
  
		  &:focus-visible,
		  &:active {
			color: var(--true-gray-900);
			text-decoration: underline;
			text-decoration-thickness: 2px;
			text-underline-offset: 4px;
		  }
		}
	  }
	}
  </style>