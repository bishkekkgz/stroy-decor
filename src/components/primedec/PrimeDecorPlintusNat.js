import React, { useState, useEffect } from 'react';
import PlintusNat from '../../catalog/prdec-plintus-nat';
import '../../styles/prdec.scss';
import PopUp from '../Popup'; // Import the PopUp component

const PrimeDecorPlintusNat = () => {
    const [counts, setCounts] = useState({});
    const [basketProducts, setBasketProducts] = useState([]);
    const [showPopUp, setShowPopUp] = useState(false);
    
    useEffect(() => {
        const basketProductsFromStorage = JSON.parse(localStorage.getItem('basketProducts')) || [];
        setBasketProducts(basketProductsFromStorage);
    }, []);

    useEffect(() => {
        localStorage.setItem('basketProducts', JSON.stringify(basketProducts));
    }, [basketProducts]);

    const toggleBasket = (id) => {
        if (basketProducts.includes(id)) {
            setBasketProducts(basketProducts.filter(productId => productId !== id ));
        } else {
            setBasketProducts([...basketProducts, id]);
        }
        setShowPopUp(true);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPopUp(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, [showPopUp]);

    return (
        <div className='primedec-container'>
            <div className='primedec'>
                {PlintusNat.map((record) => (
                    <div className='duties' key={record.id}>
                        <img src={require(`../../assets/catalog/primeDecor/${record.image}.jpg`)} alt={record.image} />
                        <p className='name'>{record.image}</p>
                        {record.inStock ? (
                            <div className='price-cart-cont'>
                                <div className='price-cont'>
                                    <p className='price'>{record.price}</p>
                                    <p id="som">c</p>
                                </div>
                                <button className="basket-btn" onClick={() => toggleBasket(record.id)}>В корзину</button>
                            </div>
                        ) : null}
                    </div>
                ))}
            </div>
            {showPopUp && <PopUp />} 
        </div>
    );
};

export default PrimeDecorPlintusNat;
