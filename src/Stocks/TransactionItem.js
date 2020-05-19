import React from 'react';

const TransactionItem=(props)=>{
    return(

    <div>{props.side}
    {props.symbol}
    {props.date}
    
    
    </div>
    )
}


export default TransactionItem