import React from 'react';

class Client extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clientsData:''
    }
  }

  //Getting data from localStorage
  componentWillMount(){
    const client = JSON.parse(localStorage.getItem('Details'));
    this.setState({
      clientsData: client[0]
    })
  }
  render() {
    return(
      <form>
        <div className="row">
          <h3><b>Clients Data</b></h3>
        </div>
        <div className="form-group row">
          <div className="col-sm-2">
            <label>Name</label>
          </div>
          <div className="col-sm-5">
            <input type="text" className="form-control" readOnly placeholder="Enter your name" value={this.state.clientsData.name} />
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-2">
            <label>Organisation</label>
          </div>
          <div className="col-sm-5">
            <input type="text" className="form-control" readOnly placeholder="Your Organisation" value={this.state.clientsData.organisation} />
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-2">
            <label>Date Of Registration</label>
          </div>
          <div className="col-sm-5">
            <input type="text" className="form-control" readOnly placeholder="Registration Date" value={this.state.clientsData.date} />
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-2">
            <label>Address</label>
          </div>
          <div className="col-sm-5">
            <input type="text" className="form-control" readOnly placeholder="Your Address" value={this.state.clientsData.address} />
          </div>
        </div>
        <hr />
      </form>
    );
  }
}

export default Client;
