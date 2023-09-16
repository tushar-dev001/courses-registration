import React, { useState } from 'react'
import './Cart.css'

const Cart = ({selectedService, remaining, totalPrice, totalCreditHour}) => {
    // console.log(totalCreditHour);


  return (
    <div>
        <h3 className='cart-body'>
            <h3 className='remaining-hour'>Credit Hour Remaining: {remaining} </h3>
            <h3>Course Name:</h3>
            {
                selectedService.map(item =>(
                        <li key={item.id}>{item.name}</li>

                ))
            }

            <h4 className='remaining-total-hour'>Total cradit hour: {totalCreditHour}</h4>
            <h4>Total Price: {totalPrice} USD</h4>
            
        </h3>
    </div>
  )
}

export default Cart