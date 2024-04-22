import React from 'react';
import PlintusNat from '../../catalog/prdec-plintus-nat';
import '../../styles/prdec.scss';

const PrimeDecorPlintusNat = () => {
    return (
        <div className='primedec-container'>
            <div className='primedec'>
                {PlintusNat.map((record) => (
                    <div className='duties' key={record.id}>
                        <img src={require(`../../assets/catalog/primeDecor/${record.image}.jpg`)} alt={record.image} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PrimeDecorPlintusNat;
