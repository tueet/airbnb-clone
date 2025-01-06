import { NavTop, NavTopLogo, NavTopTabList, NavTopMenu } from './styled.js';

function NavTopProvider() {
    return (
        <NavTop>
            <NavTopLogo><p><img src="logo.svg" alt="airJJABnb" /></p></NavTopLogo>
            <NavTopTabList>
                <a>
                    <span>숙소</span>
                </a>
                <a>
                    <span>체험</span>
                </a>
            </NavTopTabList>
            <NavTopMenu>
                <div>
                    <a><span>당신의 공간을 에어비앤비하세요</span></a>
                    <a><img src="icon/translate.png" alt="언어 바꾸기" /></a>
                </div>
                <div>
                    <a>
                        <p><img src="icon/menu.png" alt="메뉴" /></p>
                        <p><img src="icon/profile.png" alt="프로필" /></p>
                    </a>
                </div>
            </NavTopMenu>
        </NavTop>
    );
}

export default NavTopProvider;