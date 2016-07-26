import React from 'react';
 





 export default class UserAbout extends React.Component{
 	render(){
 		return(
 <li>
         {this.props.id} {this.props.name}
		 <button onClick={()=>this.props.user_del(this.props.name)}>Delete</button>
         
 			
 </li>
 			);
 	}
 }