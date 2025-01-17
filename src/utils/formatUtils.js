// 한국 기준 통화 포맷
export const getFormattedCurrency = (price) => {
  return price.toLocaleString('ko-KR', {
    style: 'currency',
    currency: 'KRW',
  });
}

// 날짜값 출력 포맷
export const getFormattedDate = (startDate = '', endDate = '') => {
  const isValidDate = (date) => !isNaN(new Date(date).getTime());
  
  // 입력 값 검증
  if (!isValidDate(startDate) || !isValidDate(endDate)) {
    throw new Error('Invalid date value provided');
  }

  const options = { month: 'long', day: 'numeric' };
  const formatter = new Intl.DateTimeFormat('ko-KR', options);

  const start = formatter.format(new Date(startDate));
  const end = new Date(startDate).getMonth() === new Date(endDate).getMonth()
    ? `${new Date(endDate).getDate()}일`     // 같은 월이면 날짜만 표시
    : formatter.format(new Date(endDate));  // 월이 다르면 전체 날짜 표시

  return `${start}~${end}`;
};