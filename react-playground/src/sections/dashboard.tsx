import React, { Component } from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'


interface Props {
    
}
interface State {
    
}

class section2 extends Component<Props, State> {
    state = {}

    render() {
        return (
            <Jumbotron fluid>
                <Container>
                    <h1>Dashboard</h1>
                    <p>
                    This is a modified jumbotron that occupies the entire horizontal space of
                    its parent.
                    </p>
                </Container>
            </Jumbotron>
        )
    }
}

export default section2
