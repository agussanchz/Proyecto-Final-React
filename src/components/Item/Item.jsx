//Importaciones
import React from 'react'
import { Card, Button, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

//Exportacion de mi funcion Item, encargada de mostrar una card
export default function Item({item}) {
  //Hook navigate, que me permite moverme hacia otra url params 
  const navigate = useNavigate();
  return (
    //Card con las caracteristicas de los items recibidos por ItemListContainer
    //Y aplicacion de una funcion onClick, que al hacerle click a la card, aplique
    //el hook"navigate" para moverse a la urlParams con un id unico
    <Col className='item-card' >
        <Card className='card' onClick={() => navigate(`/item/${item.id}`)}>
            <Card.Img variant="top" src={item.img} />
            <Card.Body className='card-body'>
                <Card.Title className='card-title'>{item.title}</Card.Title>
                <Button className='card-button' variant="primary">VER MAS</Button>
            </Card.Body>
        </Card>
    </Col>
  )
}
 