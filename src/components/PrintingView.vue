<template>
  <div class="flex column printing-view">
    <div class="printing-view__wrapper flex wrap">
      <div class="printing-view__left-column">
        <PrintingSelect v-model="paperSizeSelected" @apply="fetchData" />
      </div>

      <div class="printing-view__right-column flex column">
        <div class="text-sm mb-sm text-medium">Price Table</div>

        <PrintingTable
          :price-data="priceData"
          :is-loading="isLoading"
          @item-clicked="onItemClick"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import usePrinting from 'composables/usePrinting';
import PrintingSelect from 'components/common/PrintingSelect.vue';
import PrintingTable from 'components/common/PrintingTable.vue';
import { PaperSize } from 'types/Printing';

const paperSizeSelected = ref(PaperSize.A4);

const { priceData, isLoading, fetchData } = usePrinting(paperSizeSelected);

const onItemClick = (price: number) => {
  priceData.value = priceData.value?.map((item) => {
    item.forEach((priceItem) => {
      if (priceItem.isSelected) {
        priceItem.isSelected = false;
      }
    });

    const matchedItem = item.find((priceItem) => priceItem.price === price);

    if (matchedItem) {
      matchedItem.isSelected = true;
    }

    return item;
  });
};

fetchData();
</script>

<style lang="scss" scoped>
.printing-view {
  background-color: #fff;
  border-radius: 1rem;
  padding: 1rem;
  box-shadow: 0 0 0.75rem rgba(0, 0, 0, 0.15);
}

.printing-view__right-column {
  overflow-x: auto;
}

.printing-view__wrapper {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 720px) {
    grid-template-columns: 3fr 7fr;
  }
}
</style>
