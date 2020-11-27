import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import * as Icon from 'react-bootstrap-icons';
import './cardItem.css'

export class CardItem extends Component {
    render() {
        let falo = this.props.icon;
        return (
            <Card className="cardItem__container">
                <i class={`cardItem__icons ${ this.props.icon }`}></i>  
                <Card.Title>
                    {this.props.title}
                </Card.Title>
            </Card>
        )
    }
}

export default CardItem;