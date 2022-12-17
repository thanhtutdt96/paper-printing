<template>
  <div v-if="isLoading" class="flex flex-center mt-md">
    <PrintingLoader />
  </div>

  <template v-else-if="displayPriceData?.length > 0">
    <table class="printing-table__table mb-md">
      <tr v-for="(priceList, index) in displayPriceData" :key="index">
        <td
          v-for="(item, itemIndex) in priceList"
          :key="itemIndex"
          class="text-xs"
          :class="{
            'printing-table__item--selected': item.isSelected,
          }"
          @click="onItemClick(item.price)"
        >
          <div>Day: {{ item.business_day }}</div>
          <div>Qty: {{ item.quantity }}</div>
        </td>
      </tr>
    </table>

    <button v-if="!isAllItemsVisible" class="btn info mb-md" @click="displayAllItems">
      See more...
    </button>

    <div class="flex justify-end items-center">
      <span class="text-md text-bold">Order Price: &#165;{{ commaHandler(displayPrice) }}</span>
      <button class="btn success ml-sm">Cart</button>
    </div>
  </template>
</template>

<script lang="ts" setup>
import { commaHandler } from 'helpers/common';
import { computed, ref, watch } from 'vue';
import PrintingLoader from 'components/common/PrintingLoader.vue';
import { PriceItem } from 'types/Printing';

const props = defineProps<{
  priceData: PriceItem[][];
  isLoading?: boolean;
}>();

const emits = defineEmits<{
  (event: 'item-clicked', value: number): void;
}>();

const isAllItemsVisible = ref(false);
const displayPrice = ref(0);

const displayPriceData = computed(() =>
  isAllItemsVisible.value
    ? [...(props.priceData || [])]
    : [...(props.priceData || [])]?.splice(0, 5),
);

const onItemClick = (price: number) => {
  displayPrice.value = price;

  emits('item-clicked', price);
};

const displayAllItems = () => {
  isAllItemsVisible.value = true;
};

watch(
  () => props.isLoading,
  (value) => {
    if (value) {
      isAllItemsVisible.value = false;
    }
  },
);
</script>

<style lang="scss" scoped>
@import 'src/styles/variable';

.printing-table__table {
  overflow: hidden;
  width: 100%;
  max-width: 100%;

  td,
  tr {
    border: 1px solid #ccc;
    position: relative;
  }

  tr {
    &:hover {
      background-color: rgba($secondary, 0.1);
    }
  }

  td {
    cursor: pointer;
    padding: 0.75rem;
    min-width: 3.5rem;

    &:hover,
    &.printing-table__item--selected {
      color: #fff;
      font-weight: 600;
    }

    &:hover {
      background-color: rgba($secondary, 0.5);
    }

    &.printing-table__item--selected {
      background-color: $secondary;
    }

    &:hover::after {
      content: '';
      position: absolute;
      background-color: rgba($secondary, 0.1);
      left: 0;
      top: -5000px;
      height: 10000px;
      width: 100%;
    }
  }
}
</style>
