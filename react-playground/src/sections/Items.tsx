import React, { Component } from 'react'
import Table from 'react-bootstrap/Table';

interface Props {
    
}
interface State {
    
}


class Items extends Component<Props, State> {
    state = {Records:[{Name:'Test1'},{Name:'Test2'}]}

    render() {
        return (
            <div>
               <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.Records.map((item, key) => {
                            return (<tr>
                                <td>{item.Name}</td>
                            </tr>
                            )})
                        }      
                        {
                            this.state.Records.map((item, key) => 
                            <tr>
                                <td>{item.Name}-1</td>
                            </tr>
                            )
                        } 
                    </tbody>
                </Table> 
            </div>
        )
    }
}

export default Items
