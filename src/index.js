import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import input from './input.json';
import registerServiceWorker from './registerServiceWorker';

class Todo extends React.Component{
  constructor(){
    super();
    this.state={
      data:input.data
    }
  }
render(){
  const da=this.state.data.map((data,id)=><li className="list-group-item" key={data.id}><input type="checkbox"/>
  {data.text}<span className="badge">checked</span></li>)
  return(
      <div>

        <ul>
            <li><h2>ToDo</h2></li>
             {da}

          </ul>
      </div>
   );
 }

}

ReactDOM.render(<Todo />,document.getElementById('root'));

registerServiceWorker();
