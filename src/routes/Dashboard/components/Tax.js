import React from 'react';

class Tax extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taxData:''
    }
  }

  componentWillMount() {
    const tax = JSON.parse(localStorage.getItem('Tax'));
      this.setState({
        taxData: tax
      })
  }

  render() {
    const taxes = this.state.taxData!==null && this.state.taxData.map(item =>{
      return(
        <ul>
          <li key={item.tax}>{item.tax}</li>
        </ul>
      )
    })

    return(
      <form>
        <div className="row">
          <h3><b>All Taxes</b></h3>
        </div>
        <div class="form-group row">
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
