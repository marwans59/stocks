import React, { useState } from 'react';
import StockAddModal from './StockAddModal'
import StockBuyModal from './StockBuyModal';
import StockSellModal from './StockSellModal'

const StockListItem = ({ symbol, price, remove ,selected}) => {



    const [buying, setBuying] = useState(false);
    const [selling,setSelling]=useState(false);

    return (
        <div className="stock-list__grid-row" onClick={selected}>
            <div className="stock-list__grid-cell">
                <a><span className="stock-list__btn stock-list__btn--remove" onClick={remove}>-</span></a>
            </div>
            <div className="stock-list__grid-cell">{symbol}</div>
            <div className="stock-list__grid-cell">{price && price.toFixed(2)}</div>
            <div className="stock-list__grid-cell">
                <a><span className="btn-transaction btn-transaction--buy" onClick={() => setBuying(true)}>buy</span></a>
                {buying &&  
                <StockBuyModal
                    closeModal={() => {
                        setBuying(false);
                    }} 
                    symbol={symbol}
                />
            }
            </div>
            <div className="stock-list__grid-cell">
                <a><span className="btn-transaction btn-transaction--sell" onClick={() => setSelling(true)}>sell</span></a>
                {selling &&  
                <StockSellModal
                    closeModal={() => {
                        setSelling(false);
                    }} 
                    symbol={symbol}
                />
            }
            </div>
            {<div className="stock-list__grid-cell"></div>}
        </div >
    );
};

export default StockListItem;