import React from 'react'
import { Button} from 'react-bootstrap'
import { CartContext } from '../../context/CartContext';


export default function ItemCart({item}) {
    const { removeFromCart } = React.useContext(CartContext)

    return (
        <div className="item-cart">
           
            <div>
                <img src={item.img} />
            </div>

            <ul>
                <li>{item.title}</li>
            </ul>

            <ul>
                <li>Cantidad: {item.quantity}</li>
            </ul>

            <ul>
                <li>Precios: ${item.price}</li>
            </ul>

            <ul>
                <li>Subtotal: ${item.quantity * item.price}</li>
            </ul>

            <ul>
                <Button className='button_itemcart' variant="primary" onClick={() => removeFromCart(item.id)}>Eliminar</Button>
            </ul>
        </div>
    )
}
