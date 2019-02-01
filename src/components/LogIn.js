import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import superagent from 'superagent';


class LogIn extends Component {
	constructor(props){
		super(props);
		this.state={
			open:false,
			Login: true,
			Record: false,
			name:"",
			email:"",
		};
	}

	showLogin = () => {
		this.setState({
			Login: false,
			Record: true
		})
	}

	onChangeInput = event =>{
		const { id, value} = event.target
		this.setState ({
			[id]: value
		})
	}

	onSubmitHandle = event =>{
		event.preventDefault()

		if (!this.state.showLogin){

			const json = {
				name: this.state.name,
				email: this.state.email
			}

			superagent.post('https://vast-gorge-40274.herokuapp.com/api/v1/users')
		      .send(json)
		      .then(res => {
		        console.log(res.body.data);
		        alert('User Saved!')
		      })
		      .catch(event => alert(event))

		      }

  	}
		




	render(){
		const formStyles = {
			width: 400,
			margin: '50px auto'
		}
		return(
			<div>
				<React.Fragment>
				{this.state.Login &&
					<div style={formStyles}>
						<form onSubmit={ this.showLogin }>
				           <TextField
				             required
				             name="email"
				             label="Email"
				             fullWidth
				             onChange={ this.handleChange }
				           />
				           <TextField
				             required
				             name="password"
				             type="password"
				             label="Password"
				             fullWidth
				             onChange={ this.handleChange }
				           />
				           <Button type='submit' variant='contained'>Login</Button>
		         		</form>
					</div>
				}
				</React.Fragment>

				<React.Fragment>
				{this.state.Record &&
					<div style={formStyles}>
						<form onSubmit={ this.onSubmitHandle }>
				           <TextField
				             required
				             id="name"
				             label="Name"
				             fullWidth
				             onChange={ this.onChangeInput }
				           />
				           <TextField
				             required
				             id="email"
				             type="email"
				             label="email"
				             fullWidth
				             onChange={ this.onChangeInput }
				           />
				           <Button type='submit' variant='contained'>Submit</Button>
		         		</form>
					</div>
				}
				</React.Fragment>
			</div>

			)
	}
}

export default LogIn;