import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { Item } from '../Item/Item'

export const ItemList = ({items}) => {

    return (
        <Container className="my-5">
            <h2 className="text-center">Productos</h2>
            <br/>
            <h4>Notebooks</h4>
            <hr/>
            <Row>
                {items.map((prod) => <Item key={prod.id} {...prod}/>)}
            </Row>
        </Container>
    )
}