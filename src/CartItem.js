import React from 'react';

class CartItem extends React.Component {

    render(){
        return(
            <div className = "cart-item">
                <div classNmae="left-block">
                    <img style={styles.image} />
                </div>
                <div className='right-block'>
                    <div style={{fontSize:25}}>Phone</div>
                    <div style={{color:'#777'}}>Rs 999</div>
                    <div style={{color:'#777'}}>Qty: 1</div>
                    <div className="cart-item-actions">


                    </div>

                </div>
            </div>
            
        )
    }
}


// making js object
const styles = {
    image:{
        height:110,
        width:110,
        borderRadius:4,
        background:'#ccc'
    }
}

export default CartItem;