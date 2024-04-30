import React, { useState, useEffect } from 'react';
import PlintusNat from '../../catalog/prdec-plintus-nat';
import '../../styles/prdec.scss';

const PrimeDecorPlintusNat = () => {
    const [counts, setCounts] = useState({});
    const [basketProducts, setBasketProducts] = useState([]);
    
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
    useEffect(() => {
        const basketProductsFromStorage = JSON.parse(localStorage.getItem('basketProducts')) || [];
        setBasketProducts(basketProductsFromStorage);
    }, []);
    useEffect(() => {
        localStorage.setItem('basketProducts', JSON.stringify(basketProducts));
    }, [basketProducts]);
    const toggleBasket = (id, counts) => {
        const quantity = counts[id] || 0; 
        if(basketProducts.includes(id)){
            setBasketProducts(basketProducts.filter(productId => productId !== id ));
        } else {
            setBasketProducts([...basketProducts, id]);
        }
        console.log(`Added ${quantity} ${quantity === 1 ? 'item' : 'items'} to basket`); 
    };
    
    
    
    return (
        <div className='primedec-container'>
            <div className='primedec'>
                {PlintusNat.map((record) => (
                    <div className='duties' key={record.id}>
                        <img src={require(`../../assets/catalog/primeDecor/${record.image}.jpg`)} alt={record.image} />
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
                                        <div className='cont-items-basket'>
                                            <ItemsQuantityCount 
                                                counts={counts} 
                                                basketProducts={basketProducts}
                                                productId={record.id}
                                                onIncrement={increment}
                                                onDecrement={decrement}
                                                onToggleBasket={toggleBasket}
                                            />
                                        </div>
                                        <button onClick={() => increment(record.id)}>+</button>
                                    </div>
                                    <button className="basket-btn" onClick={() => toggleBasket(record.id, counts)}>В корзину</button>
                                </div>
                            </div>
                        ) : null}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PrimeDecorPlintusNat;
