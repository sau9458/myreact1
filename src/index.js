import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import data from './input.json';
//import AddOption from './AddOption.js'
import registerServiceWorker from './registerServiceWorker';
let btnStyle = {

	}
export class Todo extends React.Component{

  constructor(){
    super();
    this.formhandler = this.formhandler.bind(this);
		this.removelist=this.removelist.bind(this);
		this.editlist=this.editlist.bind(this);
		this.saveData=this.saveData.bind(this);
    this.state={
      data:data.data,
      options:[],
			update:''
    }
  }

  handleClick=(e)=> {

     const change = e.status === false?true:false;
     const badges = e.badge === ""?"complete":"";
     e.badge = badges;
     e.status = change
     this.setState({
       status:change,
       badge:badges
     });

   }

   formhandler=(e)=>{
     e.preventDefault(e);
     const option = e.target.elements.option.value.trim();
     var json={"id":Date.now(),"text":option,"status":true,"badge":""};
     const error = this.handleAddOptions(json);
     e.target.elements.option.value="";

     this.setState(() => {
       return { error };
     });

 }


 handleAddOptions(json){
     if (!json.text) {
       btnStyle = {
       			border: '1px solid red'
       		}
   return false;
     }
 else{
     this.setState((prevState) => {
       return {
         data: prevState.data.concat(json)
       };
     });
     btnStyle = {
           border: '1px solid #ddd'
          }
   }
 }
 removelist=(e)=>{
	 const newState = this.state.data;
  	if (newState.indexOf(e) > -1) {
    	newState.splice(newState.indexOf(e), 1);
      this.setState(
				{
					data: newState
				})
    }

 }
editlist=(e)=>{
	const editState=this.state.data;
	const index=editState.indexOf(e);
	editState[index].text=<form onSubmit={this.formData} className="form-inline">
		<input type="text" name="editdata" className=" editinput" defaultValue={e.text} onChange={this.inputedit}  />
		<button className="btn btn-default savebtn" onClick={(em)=>this.saveData(e,em)} >save</button>
	</form>
	this.setState({
		data:editState
	})
}

formData=(e)=>{
e.preventDefault();
}

inputedit=(e)=>{
	this.setState({
		update:e.target.value
	})
}

saveData=(e,em)=>{
	const editState=this.state.data;
	const index=editState.indexOf(e);

	editState[index].text=this.state.update;
	this.setState({
		data:editState
	})
}

render(){
  const jsondata=this.state.data.map((data,id)=><li className="list-group-item " key={data.id}>
    <div className="parent">
			<div className="subparent">
				<input type="checkbox" onClick={(e) => this.handleClick(data, e)}/>
        {data.text}
     </div>
		 <div className="btndiv">
			 <span className="badge" >{data.badge}</span>
	<button className="btn btn-default edit" onClick={(e)=>this.editlist(data,e)}>Edit</button>
	<button className="btn btn-default remove" onClick={(e)=>this.removelist(data,e)}>Remove</button>
	  </div>
</div>
</li>);
  return(
      <div>

        <ul>
            <li><h2>ToDo</h2></li>
             {jsondata}<br/>
             <form onSubmit={this.formhandler}>
             <li><input type="text" name="option" className="form-control" style={btnStyle}/></li>
             <li><button className="btn btn-default submit" >Submit</button></li>
              </form>
          </ul>
      </div>
   );
 }

}
ReactDOM.render(<Todo />,document.getElementById('root'));

registerServiceWorker();
export default Todo;
