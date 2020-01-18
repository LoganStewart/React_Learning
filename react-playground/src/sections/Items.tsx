import React, { Component } from 'react'
import Table from 'react-bootstrap/Table';
import Card  from 'react-bootstrap/Card';
import Button  from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Item from './Item';

interface Props {
    
}
interface State {
    
}


class Items extends Component<Props, State> {
    state = {Records:[{Name:'Test1'},{Name:'Test2'}]}

    render() {
        return (
            
            <div>
                <Jumbotron fluid>
                    <Container>
                        <h1>Home</h1>
                        <p>
                        This is a modified jumbotron that occupies the entire horizontal space of
                        its parent.
                        </p>
                    </Container>
                </Jumbotron>
                <Table striped bordered hover variant="dark" size="sm" responsive >
                    <thead>
                        <tr>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.Records.map((item, key) => 
                            <tr>
                                <td>{item.Name}</td>
                            </tr>
                            )
                        } 
                    </tbody>
                </Table>
                {
                    this.state.Records.map((item, key) =>
                    <Item name={item.Name}></Item>                                     
                    
                    )
                } 
                
            </div>
        )
    }
}

export default Items
