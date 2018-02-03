import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

class Header extends React.Component{
render(){

  return(
<div>  <p className="head">Todo App</p>
  <table className="table table-bordered">
<thead>

</thead>
<tbody>
<tr>
  <td><input type="checkbox" value="" data-toggle="collapse" data-target="#demo1"/>abc<span className="badge collapse " id="demo1">Completed</span></td>

</tr>
<tr>
  <td><input type="checkbox" value="" data-toggle="collapse" data-target="#demo2"/>def <span className="badge collapse  " id="demo2">Completed</span></td>
</tr>
<tr>
<td><input type="checkbox" value="" data-toggle="collapse" data-target="#demo3"/>ghi <span className="badge collapse " id="demo3">Completed</span></td>
</tr>
</tbody>
</table></div>

  );

}


}
ReactDOM.render(<Header />,document.getElementById('root'));

registerServiceWorker();
