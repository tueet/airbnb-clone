import { NavWrap, NavLogo, NavMenu } from './styled.js';
import NavSearchBar from './NavSearchBar';

function Nav() {
    return (
        <NavWrap>
            <NavLogo><p><img src="logo.svg" alt="airJJABnb" /></p></NavLogo>
            <NavSearchBar />
            <NavMenu>
                <div>
                    <a><span>당신의 공간을 에어짭앤비하세요?</span></a>
                    <a>
                        <p>
                            <img src="icon/translate.png" alt="언어 바꾸기" />
                        </p>
                    </a>
                </div>
                <div>
                    <a>
                        <p><img src="icon/menu.png" alt="메뉴" /></p>
                        <p><img src="icon/profile.png" alt="프로필" /></p>
                    </a>
                </div>
            </NavMenu>
        </NavWrap>
    );
}

export default Nav;