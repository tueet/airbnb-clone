import { NavSearchBarWrap, NavTabList, NavSearchBarContent } from './styled.js';

function NavSearchBar() {
    return (
        <NavSearchBarWrap>
            <div>
                <NavTabList>
                    <button><span>숙소</span></button>
                    <button><span>체험</span></button>
                </NavTabList>
                <NavSearchBarContent>
                    <section>
                        <label>
                            <span>여행지</span>
                            <input type="text" placeholder="여행지 검색" />
                        </label>
                        <div>
                            <label>
                                <span>체크인</span>
                                <p>날짜 추가</p>
                            </label>
                            <label>
                                <span>체크아웃</span>
                                <p>날짜 추가</p>
                            </label>
                        </div>
                        <label>
                            <span>여행자</span>
                            <input type="text" placeholder="게스트 추가" />
                        </label>
                    </section>
                    <button className="search-btn">
                        <p>
                            <img src="icon/search.png" alt="검색" />
                        </p>
                    </button>
                </NavSearchBarContent>
            </div>
        </NavSearchBarWrap>
    );
}

export default NavSearchBar;