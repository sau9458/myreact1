import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import input from './input.json';
import registerServiceWorker from './registerServiceWorker';
let btnStyle = {
		border: '1px solid grey'
	}
class Todo extends React.Component{
  constructor(){
    super();
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state={
      data:input.data,
      options:[]
    }
  }
  handleAddOption(option) {
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

render(){
  const jsondata=this.state.data.map((data,id)=><li className="list-group-item" key={data.id}><input type="checkbox"/>
  {data.text}<span className="badge">checked</span></li>)
  return(
      <div>

        <ul>
            <li><h2>ToDo</h2></li>
             {jsondata}
            <AddOption handleAddOption={this.handleAddOption} options={this.state.options}/>

          </ul>
      </div>
   );
 }

}


class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    };
  }
  handleAddOption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);
    e.target.elements.option.value="";

    this.setState(() => {
      return { error };
    });
  }
  render() {
    return (
      <div>
        {
          this.props.options.map((option) => <li key={option} className="form-control" ><input type="checkbox"/>{option}</li>)
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
ReactDOM.render(<Todo />,document.getElementById('root'));

registerServiceWorker();
