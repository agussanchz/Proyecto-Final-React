//Importaciones
import React from 'react'
import Item from '../Item/Item'
import { Row } from 'react-bootstrap'

//Exportacion de mi funcion ItemList, donde mapeo los productos recibidos de ItemListContainer
export default function ItemList({items}) {
  //Mapeo los productos y se los paso por props a mi componente Item
  return (
    <Row className ='item-container-card'>
        {items.map((item) => <Item key={item.id} item={item}/>)}  
    </Row>
  )
}
 