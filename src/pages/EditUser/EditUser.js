import React, {useState,useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import UserService from '../../Services/UserService';

const EditUser = () => {
	const history = useNavigate();
	const [user, setUser] = useState({
		name: '',
		username: '',
		email:'',
		phone:''
	});
	const {name,username,email,phone} = user;

	const onInputChange = (e) =>{
		console.log(e.target.value)
		setUser({...user, [e.target.name]: e.target.value})
	}

	const onSubmit = async (e)=>{
		e.preventDefault();
		await UserService.createUser(user); 
		//after submit redirect user to home page
		history("/");
	}

	return (
		<div className="container">
			<div className="panel-wrapper">
				<div className="panel user-detail">
					<div className="panel-header">
					Update User Details
					</div>
					<div className="panel-content">
						<form onSubmit={e=> onSubmit(e)}>
							<div class="form-wrapper">
								<div class="left-wrapper">
									<div class="form-group">
										<label for="username">Username</label>
										<input 
											type="text"  
											placeholder='Enter User Name'
											name="username"
											value={username}
											onChange={e=> onInputChange(e)}
											required="required"/>
									</div>
									<div class="form-group">
										<label for="name">Name</label>
										<input 
											type="text"  
											placeholder='Enter Name'
											name="name"
											value={name}
											onChange={e=> onInputChange(e)}
											required="required"/>
									</div>
								</div>

								<div class="right-wrapper">
									<div class="form-group">
										<label for="name">Email</label>
										<input 
											type="email"  
											placeholder='Enter Email'
											name="email"
											value={email}
											onChange={e=> onInputChange(e)}
											required="required"/>
									</div>
									<div class="form-group">
										<label for="name">Phone</label>
										<input 
											type="text"  
											placeholder='Enter Phone No.'
											name="phone"
											value={phone}
											onChange={e=> onInputChange(e)}
											required="required"/>
									</div>
								</div>
							</div>

							<div class="form-group">
								<button type="submit" className="submit-btn">Register</button>
							</div>
							
						</form>
					</div>
				</div>
		  </div>
        </div>
	)
}
export default EditUser;