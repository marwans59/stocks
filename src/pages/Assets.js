
    import React, { useState ,useEffect} from 'react'
    import useFetch, { DEFAULT_OPTIONS, baseURL, getUserId } from '../shared/useFetch';
  import { AgGridReact } from 'ag-grid-react';
  import StockSellButton from '../Stocks/StockSellButton';


    import 'ag-grid-community/dist/styles/ag-grid.css';
    import 'ag-grid-community/dist/styles/ag-theme-balham.css';

    
    
    
    const Assets =()=>{
     const [fetchOptions, setFetchOptions] = useState(DEFAULT_OPTIONS);

     const [stocks, isLoading, error] = useFetch('/userdata/allocations', fetchOptions);

        
        const stockitem=[]
        
        stocks && stocks.map(stock=>{
         return stockitem.push(stock) })
    
    
        const columnDefs = [
    
            { headerName: 'Stock', field: 'symbol' },
            { headerName: 'Amount', field: 'amount' },
            {headerName: 'sell', cellRenderer:StockSellButton,width:50}
            
    
        ]

        useEffect(()=>{

            setFetchOptions({ refresh: new Date().getMilliseconds() });
        },[])


    
    
        return (
            <div className="ag-theme-balham"
            style={{
               "height": 500, "width": "100%"
            }}
            >
                <AgGridReact
                    columnDefs={columnDefs}
                    rowData={stocks} />
            </div>
    
    
    
    
        )
    
    };



export default Assets;