// 배열을 랜덤하게 섞는 함수
export const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); 	// 0부터 i까지의 무작위 인덱스 생성
      [array[i], array[j]] = [array[j], array[i]]; 	// 두 요소를 교환
  }
  return array;
}