import React from 'react';

import Client from './Client';
import Tax from './Tax';
import Invoice from './Invoice';

class Dashboard extends React.Component {

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
