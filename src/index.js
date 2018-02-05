import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import input from './input.json';
import AddOption from './AddOption.js'
import registerServiceWorker from './registerServiceWorker';

export class Todo extends React.Component{
  constructor(){
    super();
    // this.handleAddOption = this.handleAddOption.bind(this);
    this.state={
      data:input.data,
      // options:[]
    }
  }
//   handleAddOption(option) {
//     if (!option) {
//
//       btnStyle = {
//       			"background-color": ' red'
//       		}
//   return false;
//     }
//
// else{
//     this.setState((prevState) => {
//       return {
//         options: prevState.options.concat(option)
//
//       };
//     });
//     btnStyle = {
//           border: '1px solid grey'
//         }
//   }
//
//   }

render(){
  const jsondata=this.state.data.map((data,id)=><li className="list-group-item" key={data.id}><input type="checkbox"/>
  {data.text}<span className="badge">checked</span></li>)
  return(
      <div>

        <ul>
            <li><h2>ToDo</h2></li>
             {jsondata}
            {<AddOption /*handleAddOption={this.handleAddOption} options={this.state.options}*//> }

          </ul>
      </div>
   );
 }

}
ReactDOM.render(<Todo />,document.getElementById('root'));

registerServiceWorker();
export default Todo;
