import React from 'react';

import Client from './Client';
import Tax from './Tax';
import Invoice from './Invoice';

class Dashboard extends React.Component {

  // componentWillMount() {
  //   const client = JSON.parse(localStorage.getItem('Details'));
  //   this.setState({
  //     clientsData: client
  //   })
  //   this.state.initialValues = {
  //     name: this.state.clientsData.name,
  //     // organisation: ,
  //     // date: ,
  //     // address:
  //   }
  //   const tax = JSON.parse(localStorage.getItem('Tax'));
  //   this.setState({
  //     taxCreated: tax
  //   })
  //   const invoice = JSON.parse(localStorage.getItem('Invoice'));
  //   this.setState({
  //     invoiceData: invoice
  //   })
  // }


  render() {
    return(
      <div>
        <Client />
        <Tax />
        <Invoice />
      </div>
    );
  }
}

export default Dashboard;
