import React from 'react';

class Invoice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      invoiceData:{}
    }
  }

  componentWillMount() {
    const invoice = JSON.parse(localStorage.getItem('Invoice'));
      this.setState({
        invoiceData: invoice[0]
      })
  }

  render() {
    return(
      <div>
        <div className="row">
          <h3><b>Invoice</b></h3>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Serial</th>
              <th scope="col">Particular</th>
              <th scope="col">Amount</th>
              <th scope="col">Tax</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>{this.state.invoiceData.particulars}</td>
              <td>{this.state.invoiceData.amount}</td>
              <td>{this.state.invoiceData.selectTax}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Invoice;
