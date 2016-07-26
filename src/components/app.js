import React from 'react';
import UsersList from'./users-list';
import UsersAdd from './users-add';
import  UserAbout from './user-about';

const list_users=[];
var i=0;
 export default class App extends React.Component{
constructor(props){
	super(props);
	this.state={
	list_users	

	};
}

 	render(){
 		return(

 			<div>
            <h1> USERS LIST </h1>  
             
             <UsersAdd user_add={this.user_add.bind(this)}/>
             <UsersList 
                list_users={this.state.list_users} 
                user_del={this.user_del.bind(this)}
             />
 			</div>
 			);
 	}


 user_add(name){
 	

    this.state.list_users.push(   {id:++i,name}  );


    this.setState({ list_users: this.state.list_users })
 }




 user_del(item){
        _.remove(this.state.list_users,list => list.name ===item);


        this.setState({list_users:this.state.list_users});
    }


 }