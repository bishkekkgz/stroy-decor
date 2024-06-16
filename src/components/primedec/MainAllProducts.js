import React, { useState, useEffect } from 'react';
import Catalog from '../../data/moldings.json';
import '../../styles/prdec.scss';
import Popup from '../Popup';

const MainAllProducts = () => {
    const basketProductsFromStorage = JSON.parse(localStorage.getItem('cart')) || [];
    const [basketProducts, setBasketProducts] = useState(basketProductsFromStorage);
    const [showPopUp, setShowPopUp] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');
    useEffect(() => {
        fetch('http://localhost:3002/moldings')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                localStorage.setItem('cart', JSON.stringify(data));
                setBasketProducts(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(basketProducts));
    }, [basketProducts]);
    const toggleBasket = (id) => {
        setBasketProducts(prevBasketProducts => {
            const isInBasket = prevBasketProducts.includes(id);
            const updatedBasket = isInBasket
                ? prevBasketProducts.filter(productId => productId !== id)
                : [...prevBasketProducts, id];
                setPopupMessage(isInBasket ? 'Товар удален из корзины!' : 'Товар добавлен в корзину покупок!');
            return updatedBasket;
        });
        setShowPopUp(true);
    };
    useEffect(() => {
        if (showPopUp) {
            const timer = setTimeout(() => {
                setShowPopUp(false);
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [showPopUp]);
    return (
        <div className='primedec-container'>
            <div className='primedec'>
                {Catalog.map((record) => (
                    <div className='duties' key={record.id}>
                        <img src={require(`../../assets/catalog/primeDecor/${record.image}.jpg`)} alt={record.image} />
                        <div className='name-container'>
                            <p className='name'>{record.image}</p>
                            {record.inStock ? (
                                <div className='price-cart-cont'>
                                    <div className='price-cont'>
                                        <p className='price'>{record.price}</p>
                                        <p id="som">c</p>
                                    </div>
                                    <button className="basket-btn" onClick={() => toggleBasket(record.id)}>
                                        {basketProducts.includes(record.id) ? 'Удалить из корзины' : 'В корзину'}
                                    </button>
                                </div>
                            ) : null}
                        </div>
                        
                    </div>
                ))}
            </div>
            {showPopUp && <Popup message={popupMessage} />}
        </div>
    );
};

export default MainAllProducts;
