import React, { useState } from 'react'
import useFetch, { DEFAULT_OPTIONS,} from '../shared/useFetch';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';




const StockTransactions = () => {

    const [fetchOptions, setFetchOptions] = useState(DEFAULT_OPTIONS);


    const [transactions] = useFetch('/transactions', fetchOptions);

    const transaction= []
    

    const tr=[]
   
    transactions && transactions.map(transaction=>{
     return tr.push(transaction) })


    const columnDefs = [

        { headerName: 'Stock', field: 'symbol' },
        { headerName: 'BUY/SELL', field: 'side' },
        { headerName: 'Price', field: 'tickPrice' },
        { headerName: 'Total Cost', field: 'cost' },
        { headerName: 'Date of transaction', field: 'date' }

    ]


    

    
    



    // {transactions && transactions.map(transaction =>
    //     <TransactionItem
    //         side={transaction.side}
    //         symbol={transaction.symbol}
    //         amount={transaction.amount}
    //         date={transaction.date}
    //     />


    // )} 






    const onStockTransaction = () => {

    };


    return (
        <div className="ag-theme-balham"
        style={{
           
           "height": 500, "width": "100%"
        
        }}


        >
            <AgGridReact
                columnDefs={columnDefs}
                rowData={transactions} />
            {/* */}



        </div>




    )

};



// if (error) {
//     return <div>`Error: {error}`</div>;
// } else if (isLoading) {
//     return <div>Loading...</div>;
// } else {
//     return (
//         <section className="stock-list">
//             <StockListHeader onStockAdded={onStockAdded} />
//             <div className="stock-list__grid">
//                 {transactions &&
//                     transactions.map(transaction=>
//                         <Transaction                        
//                         />)
//                 }
//             </div>
//         </section>
//     );
// }





export default StockTransactions;