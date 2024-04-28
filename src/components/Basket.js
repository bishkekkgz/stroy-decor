import React, { useState, useEffect } from 'react';
import PlintusNat from '../catalog/prdec-plintus-nat';

const Basket = () => {
    const [basketProducts, setBasketProducts] = useState([]);

    useEffect(() => {
        const basketProductsFromStorage = JSON.parse(localStorage.getItem('basketProducts')) || [];
        console.log("Basket products from storage:", basketProductsFromStorage);
        setBasketProducts(basketProductsFromStorage);
    }, []);

    return (
        <div>
            <p className='section-header'>Basket</p>
            <div className='liked-products-container'>
                {basketProducts.length === 0 ? (
                    <p>No products in basket</p>
                ) : (
                    <div>
                    {PlintusNat.filter(record => basketProducts.includes(record.id)).map(record => (
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
