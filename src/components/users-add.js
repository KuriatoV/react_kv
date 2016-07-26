import React from 'react';
 
 export default class UsersAdd extends React.Component{
 	render(){
 		return(

 			<form onSubmit={this.handleAdd.bind(this)}>
              <input type="text" id="addInput" placeholder="Add new user here" ref="addUser"/>
              <button type="submit" id="addBtn" >Add</button>
 			</form>
 			);
 	}

 	handleAdd(event){
 		event.preventDefault();
 		this.props.user_add(this.refs.addUser.value);
 		this.refs.addUser.value ='';
 	
 	}
 }