import React, { Component } from 'react';
import { Container, Table } from 'react-bootstrap';
import axios from 'axios';

const endpoint = '/get_chain'
class Transactions extends Component {
  constructor(props){
    super(props);
    this.state = {
      transactions: [],
    }
  }
  componentDidMount() {
    axios.get(endpoint)
      .then(res => {
        const transactions = res.data.chain;
        this.setState({ transactions });
      })
  }
  render(){
    return (
      <Container>
      <h3><b> Transactions </b></h3>
      <p>(Sync to get the latest transactions in the blockchain)</p>
      <Table responsive>
  <thead>
  <tr>
      <th>From</th>
      <th>To</th>
      <th>Amount (Sudo)</th>
      <th>Timestamp</th>
    </tr>
  </thead>
  <tbody>
  { this.state.transactions.slice(0).reverse().map(transaction =>
    transaction.transactions.map( t =>
    <tr key={t}>
      <td><b style={{color: '#007bff'}}>0x{t.sender}</b></td>
      <td><b style={{color: '#007bff'}}>0x{t.receiver}</b></td>
      <td><b style={{color: '#007bff'}}>{parseFloat(t.amount).toFixed(5)} </b></td>
      <td><b style={{color: '#007bff'}}>{t.time}</b></td>
    </tr>
  ))}
    </tbody>
    </Table>
      </Container>
    );
  }
}

export default Transactions;
