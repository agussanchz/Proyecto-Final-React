import React from 'react'
import { Link } from 'react-router-dom' 
import ItemCart from '../../components/ItemCart/ItemCart'
import { CartContext } from '../../context/CartContext'
import { Container, Row, Table} from 'react-bootstrap'

export default function Cart() {

  const { cart, totalPrice, deleteAll } = React.useContext(CartContext)

  if (cart.length === 0){
    return (
      <div className='cart-vacio'>
        <h2 className='title__cart'>Tu carrito esta vacio!</h2>

        <div className='button__cart'>
          <Link to={'/products'}>
            <input type="button" value="Comprar productos"/>
          </Link>
        </div> 
      </div>
    )
  }

  return (
    <Container className="item-cart">
      <Row>        
        {
          cart.map(product => <ItemCart key={product.id} item={product}/>)
        }
  
        <p className='total-price'>
          Total de su compra: ${totalPrice()}
        </p>

        <div className='emitir-compra'>
          <Link to={'/checkout'}>
            <button>Comprar Ahora</button>
          </Link>
          <Link to={'/products'}>
            <button>Ir a productos</button>
          </Link>
          <button onClick={deleteAll}>Vaciar carrito</button>      
        </div>    
      </Row>
    </Container>
  )
}
