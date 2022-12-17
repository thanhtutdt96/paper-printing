import { api } from 'helpers/axios';
import { ref, Ref } from 'vue';
import { PaperSize, PriceDataResponse, PriceItem } from 'types/Printing';

const usePrinting = (paperSize: Ref<PaperSize>) => {
  const isLoading = ref(false);

  const priceData = ref<PriceItem[][]>([]);

  const fetchData = async () => {
    isLoading.value = true;

    const response = await api
      .get<PriceDataResponse>(`/prices?paper_size=${paperSize.value}`)
      .catch((error) => {
        console.log(error);
      })
      .finally(() => (isLoading.value = false));

    if (!response?.data) {
      return;
    }

    priceData.value = response.data?.prices || [];
  };

  return {
    priceData,
    fetchData,
    isLoading,
  };
};

export default usePrinting;
