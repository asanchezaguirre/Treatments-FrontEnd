import React, { Component } from 'react';
import superagent from 'superagent';
import IconButton from '@material-ui/core/IconButton';
import AddCircle from '@material-ui/icons/AddCircle';
import {Link} from 'react-router-dom';

class Users extends Component {
	constructor(){
		super()
		this.state = {
			users:[]
		}
	}

	componentDidMount(){
	    superagent
	   .get('https://vast-gorge-40274.herokuapp.com/api/v1/users')
	   .then(res => {
	      var allUsers = res.body.data;
	      
	      this.setState({users : allUsers})
	   })
	}

	render(){
		return(
			<React.Fragment>
				<div>
					 <table>
					 	<tr>
					 		<th>Id</th>
					 		<th>Name</th>
					 		<th>Email</th>
					 	</tr>
								{this.state.users.map(user => {
										return(
											<tr>
												<th>{user._id}</th>
												<th>{user.name}</th>
												<th>{user.email}</th>
											</tr>
										);
									
									})}
					</table>
				</div>
			
		       <Link to='/login'><AddCircle /></Link>
	          
	        </React.Fragment>
			)
	}
}

export default Users;