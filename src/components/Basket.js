// import React, { useState, useEffect } from 'react';

// const Basket = () => {
//     const [basketProducts, setBasketProducts] = useState([]);
//     useEffect(() => {
//         const basketProductsFromStorage = JSON.parse(localStorage.getItem('basketProducts')) || [];
//         setBasketProducts(basketProductsFromStorage);
//     }, []);

//     return (
//         <div>
//             <p className='section-header'>Basket</p>
//             <div className='liked-products-container'>
//                 {basketProducts.length === 0 ? (
//                     <p>No products in basket</p>
//                 ) : (
//                     <div >
//                         {basketProducts.map(product=> (
//                             <div className='box' key={product.id}>
//                                 <img src={require(`../assets/catalog/primeDecor/${product.image}.jpeg`)}/>
//                             </div>
//                         ))}
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default Basket;
