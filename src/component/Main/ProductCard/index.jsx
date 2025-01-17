import React, { useEffect, useState } from 'react';
import { getFormattedCurrency } from '@utils/formatUtils';
import { productData } from "@data/productData";
import { ProdCardWrap, ProdCardContent } from './styled.js';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

function ProductCard() {
	const [cards, setCards] = useState(productData);

	const toggleWishlist = (id) => {
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === id
          ? { ...card, isWishlisted: !card.isWishlisted }
          : card
      )
    );
  };
	
	return (
		<ProdCardWrap>
			{
				cards.map((prod)=>{
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
						<button type="button" className="card-wish-btn" onClick={()=> toggleWishlist(prod.id)}>
							<img src="icon/heart.svg" alt="wish" className={`${prod.isWishlisted === true ? 'act' : ''}`}/>
						</button>
						<Swiper
							className="card-img"
							modules={[Pagination]}
							slidesPerView={1}
							pagination
						>
							<SwiperSlide><img src={ prod.img } alt={ prod.location } /></SwiperSlide>
							<SwiperSlide><img src={ prod.img } alt={ prod.location } /></SwiperSlide>
							<SwiperSlide><img src={ prod.img } alt={ prod.location } /></SwiperSlide>
							<SwiperSlide><img src={ prod.img } alt={ prod.location } /></SwiperSlide>
						</Swiper>
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
								<span>{ getFormattedCurrency(prod.price) }</span>
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