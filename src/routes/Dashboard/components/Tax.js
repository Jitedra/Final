import React from 'react';

class Tax extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taxData:''
    }
  }

  //Getting data from localStorage
  componentWillMount() {
    const tax = JSON.parse(localStorage.getItem('Tax'));
      this.setState({
        taxData: tax
      })
  }

  render() {
    //setting items of tax in list
    const taxes = this.state.taxData!==null && this.state.taxData.map(tax =>{
      return(
        <ul>
          <li key={tax.tax}>{tax.tax}</li>
        </ul>
      )
    })

    return(
      <form>
        <div className="row">
          <h3><b>All Taxes</b></h3>
        </div>
        <div className="form-group row">
          <div className="col-sm-5">
            {taxes}
          </div>
        </div>
        <hr />
      </form>
    );
  }
}

export default Tax;
