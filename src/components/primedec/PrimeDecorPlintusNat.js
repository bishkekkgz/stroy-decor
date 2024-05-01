import React, { useState, useEffect } from 'react';
import PlintusNat from '../../catalog/prdec-plintus-nat';
import '../../styles/prdec.scss';
import {SlBasket} from "react-icons/sl";


const PrimeDecorPlintusNat = () => {
    const [counts, setCounts] = useState({});
    const [basketProducts, setBasketProducts] = useState([]);

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
    };
    
    return (
        <div className='primedec-container'>
            <div className='primedec'>
                {PlintusNat.map((record) => (
                    <div className='duties' key={record.id}>
                        <img src={require(`../../assets/catalog/primeDecor/${record.image}.jpg`)} alt={record.image} />
                        <p className='name'>{record.image}</p>
                        {record.inStock ? (
                            <div className='price-basket-cont'>
                                <div className='price-cont'>
                                    <p className='price'>{record.price}</p>
                                    <p id="som">c</p>
                                </div>
                                    <SlBasket id='heart' />
                            </div>
                        ) : null}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PrimeDecorPlintusNat;
