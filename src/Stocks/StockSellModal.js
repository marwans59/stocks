import React, { useState } from 'react';
import Modal from '../UI/Modal';
import useFetch, { DEFAULT_OPTIONS ,baseURL,getUserId} from '../shared/useFetch';








const StockSellModal = (props) => {

    const [amount, setAmount] = useState(0);
    const [isError, setError] = useState(false);
    const [fetchOptions, setFetchOptions] = useState(DEFAULT_OPTIONS);
    const [stocks, isLoading, error] = useFetch('userdata/watchlist', fetchOptions);


    const sellStock = async () => {

        const data = { symbol: props.symbol, side: 'SELL', amount }
        const options = {
            method: 'POST',
            headers: {
                userid: getUserId(),
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)


        };


        let response = await fetch(`${baseURL}transactions`, options);
        if (response.status == 400) {
            setError(true)
        }
        else {
            console.log(options.headers.body)
            console.log(response.status)
            console.log('add-response', response);
            props.closeModal && props.closeModal();
            setFetchOptions({ refresh: new Date().getMilliseconds() });
        }




    };

    return (
        <div>
            {isError ? <p>"You Don't have that many {props.symbol} !!</p> :
                <Modal
                    title="How many stocks do you want to sell"
                    closeModal={props.closeModal}
                    symbol={props.symbol}   >
                    <input class="modal__number-box" type="number" placeholder="enter amount" onChange={(event) => setAmount(event.target.value)} />
                    <button className="modal__btn" onClick={sellStock}> Sell</button>
                </Modal>
            }
        </div>



    );
};

export default StockSellModal;