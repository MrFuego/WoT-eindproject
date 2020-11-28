import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import './cardItem.css'

export class CardItem extends Component {
    render() {
        return (
            <Card className="cardItem__container">
                <i className={`cardItem__icons ${ this.props.icon }`}></i>  
                <Card.Title>
                    {this.props.title}
                </Card.Title>
            </Card>
        )
    }
}

export default CardItem;