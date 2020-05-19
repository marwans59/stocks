import React from 'react';
import {createPortal} from 'react-dom';



const BuyModal =() =>{

    return(

 createPortal(    
<div class="modal modal__buy">
<div class="modal__overlay"></div>
<div class="modal__content modal__content--large">
    <div class="modal__close">x</div>
    <h2 class="modal__h2">Buy stock</h2>
    <select class="modal__dropdown">
        <option value="AMZN">Amazon</option>
        <option value="DSNY">Disney</option>
        <option value="HULU">Hulu</option>
        <option value="NTFLX">Netflix</option>
    </select>

    

    <button class="modal__btn">Buy</button>
</div>
</div>

    )
    );
}

export default BuyModal;
