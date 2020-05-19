import React, { useState } from 'react';
import StockListItem from './StockListItem';
import StockListHeader from './StockListHeader';
import useFetch, { DEFAULT_OPTIONS ,baseURL,getUserId} from '../shared/useFetch';

 
const StockList = (props) => {

    const [selectedStock,setSelection]=useState('')
    const [fetchOptions, setFetchOptions] = useState(DEFAULT_OPTIONS);
    const [stocks, isLoading, error] = useFetch('userdata/watchlist', fetchOptions);
    const [stocksList] = useFetch('stocks', fetchOptions);
    const [buying, setBuying] = useState(false);
    //console.log(stocks);
 
    const getPrice = (symbol) => {
        const stock = stocksList && stocksList.find(stock => stock.symbol === symbol);
        return stock && stock.lastTick.price;
    };
 
    const onStockAdded = () => {
        setFetchOptions({ refresh: new Date().getMilliseconds() });
    };

        const removeStock= async (key) => {
            const symbol= key;
            const data = { symbol, action: 'REMOVE' }
            const options = {
                method: 'POST',
                headers: {
                    userid: getUserId(),
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)

    
            };
            const response = await fetch(`${baseURL}userdata/watchlist`, options);
            console.log('add-response', response);
            setFetchOptions({ refresh: new Date().getMilliseconds() });
    
        };

    const buyStock = (symbol) =>{
        setBuying(true)
        console.log(buying)

        /*will add the stock to server*/
    }

   const selectionHandler =(symbol)=>{

    setSelection(symbol)
    


   }

    
 
    if (error) {
        return <div>`Error: {error}`</div>;
    } else if (isLoading) {
        return <div>Loading...</div>;
    } else {
        return (
            <section className="stock-list" onClick={props.selected(selectedStock)}>
                <StockListHeader onStockAdded={onStockAdded} />
                <div className="stock-list__grid">
                    {stocks &&
                        stocks.map(stock =>
                            <StockListItem
                                key={stock.symbol}
                                symbol={stock.symbol}
                                price={getPrice(stock.symbol)}
                                remove={()=> removeStock(stock.symbol)}
                                selected={()=> selectionHandler(stock.symbol)}         
                            />)
                    }
                </div>
            </section>
        );
    }
};
 
export default StockList;