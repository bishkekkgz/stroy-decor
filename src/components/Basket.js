import React, { useState, useEffect } from 'react';
import PrimeDecorPlintusNat from '../components/primedec/PrimeDecorPlintusNat';
const Basket = () => {
    const [basketProducts, setbasketProducts] = useState([]);
    useEffect(() => {
        const basketProductsFromStorage = JSON.parse(localStorage.getItem('basketProducts')) || [];
        setbasketProducts(basketProductsFromStorage);
    }, []);

    const handleDelete = (id) =>{
        const updatedBasket = basketProducts.filter(productId => productId !== id);
        setbasketProducts(updatedBasket);
        localStorage.setItem('basketProducts', JSON.stringify(updatedBasket));
    }

    return (
        <div>
            <p className='section-header'>Basket</p>
            <div className='liked-products-container'>
            {basketProducts.length === 0 ? (
                <p>No products in basket</p>
            ) : (
                <div className='liked-products'>
                    {PrimeDecorPlintusNat.filter(record => basketProducts.includes(record.id)).map(record => (
                        <div className='box' key={record.id}>
                            <img src={require(`../assets/catalog/primeDecor/${record.image}.jpg`)} alt={record.image} />
                        </div>
                    ))}
                </div>
            )}
            </div>
        </div>
    );
};

export default Basket;