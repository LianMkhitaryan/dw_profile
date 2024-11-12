<template>
	<transition
		name="slide-down"
		@before-enter="onBeforeEnter"
		@enter="onEnter"
		@before-leave="onBeforeLeave"
		@leave="onLeave"
	>
		<slot v-if="props.condition" />
	</transition>
</template>

<script setup lang="ts">
	const props = defineProps({
		condition: {
			required: true,
			type: Boolean
		}
	})

	const onBeforeEnter = (el: HTMLElement | Element) => {
		if (el instanceof HTMLElement) {
			el.style.height = '0'
		}
	}

	const onEnter = (el: HTMLElement | Element) => {
		if (el instanceof HTMLElement) {
			el.style.height = el.scrollHeight + 'px'
		}
	}

	const onBeforeLeave = (el: HTMLElement | Element) => {
		if (el instanceof HTMLElement) {
			el.style.height = el.scrollHeight + 'px'
		}
	}

	const onLeave = (el: HTMLElement | Element) => {
		if (el instanceof HTMLElement) {
			el.style.height = '0'
		}
	}
</script>

<style scoped lang="scss">
	.slide-down-enter-active,
	.slide-down-leave-active {
		overflow: hidden;
		transition: height var(--transition);
	}
</style>
