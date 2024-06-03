import React, {useState, useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Molding from '../catalog/prdec-molding';
import Plintus from '../catalog/prdec-plintus';
import PlintusNat from '../catalog/prdec-plintus-nat';
import '../styles/productdetail.scss';
import Navbar from '../components/Navbar';
import NavBlockItems from './NavBlockItems';

function ProductDetails() {
    const { productId } = useParams();
    const [basketProducts, setBasketProducts] = useState([]);
    const [showPopUp, setShowPopUp] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        const basketProductsFromStorage = JSON.parse(localStorage.getItem('basketProducts')) || [];
        setBasketProducts(basketProductsFromStorage);
    }, []);
    useEffect(() => {
        localStorage.setItem('basketProducts', JSON.stringify(basketProducts));
    }, [basketProducts]);
    const product = [...Molding, ...Plintus, ...PlintusNat].find(product => product.id === parseInt(productId));
    if (!product) {
        return <div>Product not found!</div>;
    }
    const toggleBasket = (id) => {
        if (basketProducts.includes(id)) {
            setBasketProducts(basketProducts.filter(productId => productId !== id ));
        } else {
            setBasketProducts([...basketProducts, id]);
        }
        setShowPopUp(true);
    };
    const goToAnotherPage = () =>{
        navigate('/');
    }
    return (
        <div>
            <Navbar />
            <NavBlockItems />
            <h2 className='h2-header'>Информация о товаре</h2>
            <div className='items'>
                <img src={require(`../assets/catalog/primeDecor/${product.image}.jpg`)} alt={product.image} />
                <p className='name-img'>{product.image}</p>
                <div className='price-cart-cont'>
                    <div className='price-cont'>
                        <p className='price'>{product.price}</p>
                        <p id="som">c</p>
                    </div>
                    <button className="basket-btn" onClick={() => toggleBasket(product.id)}>В корзину</button>
                </div>
            </div>
            <button onClick={goToAnotherPage} className='main-page-btn'>Главная страница</button>
        </div>
    );
}
export default ProductDetails;