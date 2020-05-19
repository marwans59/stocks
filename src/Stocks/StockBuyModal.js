import React, { useState } from 'react';
import Modal from '../UI/Modal';
import useFetch, { DEFAULT_OPTIONS ,baseURL,getUserId} from '../shared/useFetch';






const StockBuyModal = (props) => {

   const [amount,setAmount]=useState(0);
   const [fetchOptions, setFetchOptions] = useState(DEFAULT_OPTIONS);
   const [transactions, isLoading, error] = useFetch('/transactions', fetchOptions);
   

    const buyStock = async () => {
        
        const data = { symbol: props.symbol, side: 'BUY' , amount}
        const options = {
            method: 'POST',
            headers: {
                userid: getUserId(),
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
            

        };
        const response = await fetch(`${baseURL}transactions`, options);
        console.log(options.headers.body)
        console.log('add-response', response);
        props.closeModal && props.closeModal();
        setFetchOptions({ refresh: new Date().getMilliseconds() });
        console.log('khod transactions')
        console.log(transactions)

    };

    return (
        <div>
        <Modal
            title="How many stocks do you want to buy"
            closeModal={props.closeModal}
             symbol={props.symbol}   >
            <input class="modal__number-box" type="number" placeholder="enter amount" onChange={(event)=>setAmount(event.target.value)} />
            <button className="modal__btn" onClick={buyStock}> Buy</button>

        </Modal>
        <p>"SEME3ny?"</p>
        </div>
    );
};

export default StockBuyModal;