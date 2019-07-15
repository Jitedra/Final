import React from 'react';
import { Field, reduxForm } from 'redux-form';

import Button from '../../Button';

class TaxForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      message:''
    }
  }

  saveTax = (values) => {
    this.props.taxValue(values);
    this.setState({
      message: "Tax is created successfully!"
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.props.handleSubmit(this.saveTax)}>
          <div className="form-group row">
            <div className="col-sm-2">
              <label>Applicable Tax :</label>
            </div>
            <div className="col-sm-5">
              <Field
                name="tax"
                component="input"
                type="text"
                placeholder="Enter Applicable Tax"
                className="form-control"
              />
            </div>
          </div>
          <div className="col-sm-5">
            <Button name={'Create Tax'} />
          </div>
        </form>
        <p><b>{this.state.message}</b></p>
      </div>
    );
  }
}
export default reduxForm({
  form: 'tax'
})(TaxForm)
