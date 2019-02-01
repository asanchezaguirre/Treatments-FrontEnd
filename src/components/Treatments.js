import React, { Component } from 'react';
import superagent from 'superagent';

class Treatments extends Component {
	constructor(){
		super()
		this.state = {
			treatment:[]
		}
	}

	componentDidMount(){
	    superagent
	   .get('https://vast-gorge-40274.herokuapp.com/api/v1/treatments')
	   .then(res => {
	      var allTreatment = res.body.data;
	      
	      this.setState({treatment : allTreatment})
	   })
	}

	render(){
		return(
			<div>
			 <table>
			 	<tr>
			 		<th>Tratamientos</th>
			 		<th>Citas</th>
			 		<th>Descripción</th>
			 		<th>Usuario</th>
			 	</tr>
						{this.state.treatment.map(treatment => {
								return(
									<tr>
										<th>{treatment.listOfTreatments}</th>
										<th>{treatment.listOfAppointments}</th>
										<th>{treatment.description}</th>
										<th>{treatment.user}</th>
									</tr>
								);
							
							})}
			</table>
		</div>
			)
	}
}

export default Treatments;