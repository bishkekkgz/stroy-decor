import React, { useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import PlintusNat from '../catalog/prdec-plintus-nat';
import '../styles/cart.scss';
import Navbar from './Navbar';
import NavBlockItems from './NavBlockItems';

const Cart = () => {
    const navigate = useNavigate(); 
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
    
    const deleteFromBasket = (id) => {
        const confirmation = window.confirm("Удалить товар из корзины?");
        if (confirmation) {
            const updatedBasket = basketProducts.filter(productId => productId !== id);
            setBasketProducts(updatedBasket);
            localStorage.setItem('basketProducts', JSON.stringify(updatedBasket));
        }
    };
    const cascadeDeleteFromBasket = () =>{
        const confirmation = window.confirm("Удалить все товары из корзины?");
        if (confirmation) {
            setBasketProducts([]);
            localStorage.removeItem('basketProducts');
        }
    }
    const isEmpty = basketProducts.length === 0;
    useEffect(() => {
        const basketProductsFromStorage = JSON.parse(localStorage.getItem('basketProducts')) || [];
        setBasketProducts(basketProductsFromStorage);
    }, []);
    const goToAnotherPage = () =>{
        navigate('/');
    }
    
    

    return (
        <div>
            <Navbar />
            <NavBlockItems />
            <p className='section-header'>Корзина</p>
            <div className='primedec-container'>
                {basketProducts.length === 0 ? (
                    <button onClick={goToAnotherPage} className='main-page'>Главная страница</button>
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
            {!isEmpty ? (
                <div className='cascade-delete-container'>
                    <button className='cascade-delete' onClick={cascadeDeleteFromBasket}>Удалить все товары</button>
                </div>
            ) : null}
        </div>
    );
};

export default Cart;
