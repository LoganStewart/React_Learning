import React, { Component } from 'react'
import Card  from 'react-bootstrap/Card';
import Button  from 'react-bootstrap/Button';

interface Props {
    name: String
}
interface State {
    
}

class Item extends Component<Props, State> {
    state = {}

    render() {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Header>Featured</Card.Header>
                <Card.Body>
                    <Card.Title>{this.props.name}</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content. 2
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card> 
        )
    }
}

export default Item
