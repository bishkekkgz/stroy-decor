import React, { useState, useEffect } from 'react';
import PlintusNat from '../catalog/prdec-plintus-nat';
import '../styles/cart.scss';
import Navbar from './Navbar';
import NavBlockItems from './NavBlockItems';

const Cart = () => {
    const [basketProducts, setBasketProducts] = useState([]);
    const [counts, setCounts] = useState({});
    const increment = (id) => {
        setCounts(prevCounts => ({
            ...prevCounts,
            [id]: (prevCounts[id] || 0) + 1 
        }));
    };
    const decrement = (id) => {
        if (counts[id] && counts[id] > 0) {
            setCounts(prevCounts => ({
                ...prevCounts,
                [id]: prevCounts[id] - 1 
            }));
        }
    };
    
    const deleteFromBasket = (id) =>{
        const updatedBasket = basketProducts.filter(productId => productId !== id);
        setBasketProducts(updatedBasket);
        localStorage.setItem('basketProducts', JSON.stringify(updatedBasket));
    }

    useEffect(() => {
        const basketProductsFromStorage = JSON.parse(localStorage.getItem('basketProducts')) || [];
        setBasketProducts(basketProductsFromStorage);
    }, []);

    return (
        <div>
            <Navbar />
            <NavBlockItems />
            <p className='section-header'>Basket</p>
            <div className='primedec-container'>
                {basketProducts.length === 0 ? (
                    <p>No products in basket</p>
                ) : (
                    <div className='primedec'>
                    {PlintusNat.filter(record => basketProducts.includes(record.id)).map(record => (
                        <div className='duties' key={record.id}>
                            <img src={require(`../assets/catalog/primeDecor/${record.image}.jpg`)} alt={record.image} />
                            <p className='name'>{record.image}</p>
                            {record.inStock ? (
                                <div>
                                    <div className='price-cont'>
                                        <p className='price'>{record.price}</p>
                                        <p id="som">c</p>
                                    </div>
                                    <div className='cont-items-basket'>
                                        <div className='items-quantity-cont'>
                                            <button onClick={() => decrement(record.id)}>-</button>
                                            <p className='count-p'>{counts[record.id] || 0}</p> 
                                            <button onClick={() => increment(record.id)}>+</button>
                                        </div>
                                        <button className="delete-btn" onClick={() => deleteFromBasket(record.id)}>Удалить</button>
                                    </div>
                                </div>
                            ) : null}
                        </div>
                    ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;
