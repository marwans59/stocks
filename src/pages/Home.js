import React,{useState} from 'react';
import StockList from '../Stocks/StockList';
import StockGraph from '../Stocks/StockGraph';
import StockTransactions from '../Stocks/StockTransactions';







const Home = ()=> {


const [selection,setSelection]= useState('')

const selectionHandler =(symbol)=>{

    setSelection(symbol)
   }



 return(
    <div>
<StockList selected={(symbol)=> selectionHandler(symbol)} activeStock={selection} />
<StockTransactions  activeStock={selection} /> 
<StockGraph activeStock={selection}/>
</div>
 )
}

export default Home ;