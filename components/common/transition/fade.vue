<template>
	<transition name="fade">
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
</script>

<style scoped lang="scss">
	.fade-enter-active,
	.fade-leave-active {
		transition: opacity var(--transition);
	}

	.fade-enter-from,
	.fade-leave-to {
		opacity: 0;
	}
</style>
