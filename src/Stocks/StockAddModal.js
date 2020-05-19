import React from 'react';
import Modal from '../UI/Modal';
import useFetch from '../shared/useFetch';
import {baseURL, getUserId} from '../shared/useFetch';



const StockAddModal = (props) => {
    const [stocks] = useFetch('stocks');


    const addStock = async () => {
        const symbol= document.getElementById('stocksToAddDropDown').value;
        const data = { symbol, action: 'ADD' }
        const options = {
            method: 'POST',
            headers: {
                userid: getUserId(),
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
            

        };
        const response = await fetch(`${baseURL}userdata/watchlist`, options);
        console.log(options.headers.body)
        console.log('add-response', response);
        props.closeModal && props.closeModal();

    };

    return (
        <Modal
            title="Select a  new stock to follow"
            closeModal={props.closeModal}

        >
            <select id="stocksToAddDropDown" className="modal__dropdown">
                {stocks &&
                    stocks.map(stock =>
                        <option 
                        key={stock.symbol}
                        value={stock.symbol}
                        
                        >
                            {`${stock.symbol}-${stock.name}`}
                        </option>)}
            </select>

            <button className="modal__btn" onClick={addStock}> Add</button>

        </Modal>
    );
};

export default StockAddModal;