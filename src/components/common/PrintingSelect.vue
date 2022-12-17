<template>
  <div class="flex column mb-lg">
    <label for="paper-select" class="text-sm mb-sm text-medium">Select paper size</label>
    <select
      :value="modelValue"
      name="paper-select"
      @change="emits('update:modelValue', $event.target.value)"
    >
      <option v-for="size in paperSizeOptions" :key="size.value" :value="size.value">
        {{ size.label }}
      </option>
    </select>
  </div>

  <div class="flex justify-end">
    <button class="btn success" @click="emits('apply')">Apply</button>
  </div>
</template>

<script setup lang="ts">
import { PaperSize } from 'types/Printing';

defineProps<{
  modelValue: PaperSize;
}>();

const emits = defineEmits<{
  (event: 'update:modelValue', value: PaperSize): void;
  (event: 'apply'): void;
}>();

const paperSizeOptions = [
  {
    label: PaperSize.A4,
    value: PaperSize.A4,
  },
  {
    label: PaperSize.B4,
    value: PaperSize.B4,
  },
  {
    label: PaperSize.A5,
    value: PaperSize.A5,
  },
  {
    label: PaperSize.B5,
    value: PaperSize.B5,
  },
];
</script>

<style lang="scss" scoped>
select {
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  padding: 0.5rem;
  width: 100%;
  &:focus {
    border-color: #86b7fe;
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgb(13 110 253 / 25%);
  }
}
</style>
