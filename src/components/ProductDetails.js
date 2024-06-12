import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Catalog from '../data/moldings.json';
import '../styles/productdetail.scss';
import Navbar from '../components/Navbar';
import NavBlockItems from './NavBlockItems';

const ProductDetails = () => {
    const { productId } = useParams();
    const [basketProducts, setBasketProducts] = useState([]);
    const [showPopUp, setShowPopUp] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const basketProductsFromStorage = JSON.parse(localStorage.getItem('cart')) || [];
        setBasketProducts(basketProductsFromStorage);
    }, []);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(basketProducts));
    }, [basketProducts]);

    const product = Catalog.find(product => product.id === parseInt(productId));
    if (!product) {
        return <div>Product not found!</div>;
    }

    const toggleBasket = (id) => {
        setBasketProducts(prevBasketProducts => {
            const isInBasket = prevBasketProducts.includes(id);
            const updatedBasket = isInBasket 
                ? prevBasketProducts.filter(productId => productId !== id) 
                : [...prevBasketProducts, id];
            return updatedBasket;
        });
        setShowPopUp(true);
        setTimeout(() => setShowPopUp(false), 2000); 
    };

    const goToAnotherPage = () => {
        navigate('/');
    };

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
                    <button className="basket-btn" onClick={() => toggleBasket(product.id)}>
                        {basketProducts.includes(product.id) ? 'Удалить из корзины' : 'В корзину'}
                    </button>
                </div>
            </div>
            {showPopUp && <div className='popup'>Товар обновлен в корзине</div>}
            <button onClick={goToAnotherPage} className='main-page-btn'>Главная страница</button>
        </div>
    );
};

export default ProductDetails;
