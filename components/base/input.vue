<template>
  <input :type="type" :class="classList" v-model="value" />
</template>

<script setup lang="ts">
const attrs = useAttrs()
const type = (attrs.type as string) || 'text'

const props = defineProps({
  modelValue: {
    required: false,
    type: String,
    default: ''
  },
  invalid: {
    required: false,
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update:modelValue'])

const value = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})

const classList = computed(() => {
  const list: Array<string> = ['input']

  if (props.invalid) {
    list.push('invalid')
  }

  if (props.modelValue) {
    list.push('filled')
  }

  return list
})
</script>

<style scoped lang="scss">
.input {
  display: block;
  width: 100%;
  height: 60px;
  font-size: var(--font-size-small);
  color: var(--black-100);
  background: var(--white-100);
  padding: 0 20px;
  border: 1px solid var(--bombay-500);
  border-radius: var(--radius-small);
  outline: none;
  transition: all var(--transition-fast);

  &::placeholder {
    color: var(--bombay-500);
  }

  &:focus,
  &.filled {
    border-color: var(--black-100);
  }

  &:disabled {
    cursor: not-allowed;
  }

  &.invalid {
    color: var(--red-600);
    background: rgba(#E01F1F, 0.05);
    border-color: var(--punch-500);
  }
}
</style>
