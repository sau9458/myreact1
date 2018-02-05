
import React from 'react';

let btnStyle = {

	}
 class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleAddOptions = this.handleAddOptions.bind(this);
    this.state = {
      error: undefined,
      options:[]
    };
  }
  handleAddOption(e) {

    e.preventDefault(e);
    const option = e.target.elements.option.value.trim();
    const error = this.handleAddOptions(option);
    e.target.elements.option.value="";

    this.setState(() => {
      return { error };
    });
  }

handleAddOptions(option){
    if (!option) {
      btnStyle = {
      			border: '1px solid red'
      		}
  return false;
    }

else{
    this.setState((prevState) => {
      return {
        options: prevState.options.concat(option)
      };
    });
    btnStyle = {
          border: '1px solid grey'
        }
  }
}
  //handleAddOption(e) {
    // e.preventDefault();
    // const option = e.target.elements.option.value.trim();
    // const error = this.handleAddOption(option);
    // e.target.elements.option.value="";
    //
    // this.setState(() => {
    //   return { error };
    // });
  //}
  render() {
    return (
      <div>
        {
          this.state.options.map((option) => <li key={option} className="list-group-item" ><input type="checkbox"/>{option}<span className="badge">checked</span></li>)
        }
        {this.state.error && <li className="list-group-item">{this.state.error}</li>}
        <form onSubmit={this.handleAddOption}><br/>
          <input type="text" name="option" className="form-control"style={btnStyle} />
          <button className="btn btn-default">Add Option</button>
        </form>
      </div>
    );
  }
}
export default AddOption;
