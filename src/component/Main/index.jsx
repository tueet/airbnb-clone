import Category from './Category';
import ProductCard from './ProductCard';
import { MainWrap } from './styled.js';

function Main() {
    return (
        <>
            <Category />
            <MainWrap>
                <ProductCard />
            </MainWrap>
        </>
    );
}

export default Main;