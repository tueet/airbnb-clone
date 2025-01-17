import { mockProductData } from '@data/mockData';
import { shuffleArray } from '@utils/arrayUtils';
import { getFormattedDate } from '@utils/formatUtils';

// 목업 데이터 확장 및 셔플
const createProductData = (count = 50) => {
  const mockData = mockProductData;

  return Array.from({ length: count }, (_, index) => ({
    ...mockData[index % mockData.length],
    id: index + 1,
    isWishlisted: false,
    date: getFormattedDate(mockData[index % mockData.length]['startDate'], mockData[index % mockData.length]['endDate']),
  }));
};

export const productData = shuffleArray(createProductData());