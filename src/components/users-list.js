import _ from 'lodash';
import React from 'react';
import  UserAbout from './user-about';





 export default class UsersList extends React.Component{


renderItems(){
	return _.map(this.props.list_users,  (list, index) => <UserAbout key={index} {...list} user_del={this.props.user_del}/> );


	}
		

 	render(){
 		
 		return(
			
              <ul>

               {this.renderItems()}

              </ul>
 			
 			);
 	}
 }