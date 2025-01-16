import React from 'react';
import { category } from "@constant/category.js";
import { CategoryWrap, CategoryContent, FilterButton } from './styled.js';

function Category() {
    return (
        <CategoryWrap>
            <CategoryContent>
                <ul>
                    {/* map 돌려서 데이터로 카테고리 버튼 생성 */}
                    {/* UI : 좌우 아이콘 버튼 띄우기 */}
                    {
                        category.map((item, i)=>{
                            return(
                                <li key={ i }>
                                    <button type="button">
                                        <p><img src={ item.img } alt={ item.title } /></p>
                                        <span>{ item.title }</span>
                                    </button>
                                </li>
                            );
                        })
                    }
                </ul>
            </CategoryContent>
            <FilterButton>
                <p><img src="icon/filter.png" alt="필터" /></p>
                <span>필터</span>
            </FilterButton>
        </CategoryWrap>
    );
}

export default Category;