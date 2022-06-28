//Importaciones
import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import { CartContext } from '../../context/CartContext'
import swal from 'sweetalert';

//Exportacion de mi funcion ItemDetail, que es la encargada de recibir productos y
// armar una card con sus caracteristicas
export default function ItemDetail({item}) {

  const [goToCart, setGoToCart] = React.useState(false)

  const { addToCart } = React.useContext(CartContext)
  
  const onAdd = (quantity) => {
   {swal(
      "Producto agregado al carrito!",
      "Gracias por visitar AsTecnologia.",
      "success"
    );}
    setGoToCart(true)
    addToCart(item, quantity)
  }
  
  const [count, setCount] = React.useState(1)


  return (
    <div className='item-card'>
        <Card className='card'>
            <Card.Img variant="top" src={item.img} />
            <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text className='card-text'>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button className='card-button'variant="primary">${item.price}</Button>
                {
                  goToCart 
                  ? <Link className='card-button-terminar'to='/cart'>Terminar Compra</Link>
                  :  <ItemCount 
                          onAdd={onAdd}
                          stock={item.stock} 
                          count={count}
                          setCount={setCount}
                    />
                }
                <Link className='card-button-terminar'to='/products'>Ir a productos</Link>
            </Card.Body>
        </Card>
    </div>
  )
}
