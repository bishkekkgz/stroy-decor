import React from "react";


const ItemsQuantityCount = ({ counts, basketProducts, productId, onIncrement, onDecrement, onToggleBasket }) => {
    const quantity = counts[productId] || 0;
    const isInBasket = basketProducts.includes(productId);
    
        return (
        <div className='items-quantity-cont'>
            <button onClick={() => onDecrement(productId)}>-</button>
            <p className='count-p'>{quantity}</p>
            <button onClick={() => onIncrement(productId)}>+</button>
            <button className="basket-btn" onClick={() => onToggleBasket(productId, counts)}>
                {isInBasket ? 'Удалить' : 'В корзину'}
            </button>
        </div>
        );
    };
    
export default ItemsQuantityCount;
