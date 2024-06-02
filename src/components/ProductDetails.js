import React from 'react';
import { useParams } from 'react-router-dom';
import Molding from '../catalog/prdec-molding';
import Plintus from '../catalog/prdec-plintus';
import PlintusNat from '../catalog/prdec-plintus-nat';


function ProductDetails() {
    const { productId } = useParams();
    const product = [...Molding, ...Plintus, ...PlintusNat].find(product => product.id === parseInt(productId));
    if (!product) {
        return <div>Product not found!</div>;
    }
    return (
        <div>
            <h2>Product Details</h2>
            <img src={require(`../assets/catalog/primeDecor/${product.image}.jpg`)} alt={product.image} />
            <p>Name: {product.image}</p>
        </div>
    );
}
export default ProductDetails;
