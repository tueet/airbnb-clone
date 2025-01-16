import React, { useEffect, useState } from 'react';
import { product } from "@/data.js";
import { ProdCardWrap, ProdCardContent } from './styled.js';

function ProductCard() {
	useEffect

	let [ wish, setWish ] = useState(false);
	console.log(wish ? 'true' : 'false');

	const productDataList = Array.from({ length: 50 }, (_, index) => ({
		...product[index % product.length],
		id: index + 1,
	}));

	const shuffleArray = (array) => {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1)); 	// 0부터 i까지의 무작위 인덱스 생성
			[array[i], array[j]] = [array[j], array[i]]; 	// 두 요소를 교환
		}
		return array;
	}

 	function formatCurrency (price) {
		return price.toLocaleString('ko-KR', {
			style: 'currency',
			currency: 'KRW',
		});
	}
	
	return (
		<ProdCardWrap>
			{
				shuffleArray(productDataList).map((prod)=>{
				return(
					<ProdCardContent key={ prod.id }>
						{
							prod.badge ? 
								<span className="card-badge">
									{
										  prod.badge === 'guest' ? '게스트 선호'
										: prod.badge === 'view' ? '뷰 맛집'
										: '인기 숙소'
									}
								</span>
							:
								''
						}
						<button type="button" className="card-wish-btn" onClick={()=>{ setWish(true) }}>
							{
								wish === false
								? <img src="icon/heart.svg" alt="wish" />
								: <img src="icon/heart-filled.svg" alt="wish" />
							}
						</button>
						<div className="card-img">
							<img src={ prod.img } alt={ prod.location } />
						</div>
						<div className="card-info">
							<div className="card-info-address">
								<p>
									<span>{ prod.country }</span>
									<span>{ prod.address }</span>
								</p>
								<p className="font-pretendard">{ prod.rate.toFixed(1) }</p>
							</div>
							<div className="card-info-location">
								<p>{ prod.location }</p>
							</div>
							<div className="card-info-date">
								<p>{ prod.date }</p>
							</div>
							{
								prod.comment ? 
									<div className="card-info-comment">
										<span>게스트 한마디</span>
										<span>{ prod.comment }</span>
									</div>
								:
									''
							}
							<div className="card-info-price">
								<span>{ formatCurrency(prod.price) }</span>
								<span>/박</span>
							</div>
						</div>
					</ProdCardContent>
					);
				})
			}
		</ProdCardWrap>
	);
}

export default ProductCard;