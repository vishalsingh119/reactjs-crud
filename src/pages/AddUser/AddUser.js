import './AddUser.scss';
import React, {useState,useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import UserService from '../../Services/UserService';

const AddUser = () =>{
	const history = useNavigate();
	const [user, setUser] = useState({
		name: '',
		username: '',
		email:'',
		phone:'',
		website: 'test.com',
		'profile-pic': 'https://avatars.dicebear.com/api/avataaars/2.svg'
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
					Add User Details
					</div>
					<div className="panel-content">
						<form onSubmit={e=> onSubmit(e)}>
							<div className="form-wrapper">
								<div className="left-wrapper">
									<div className="form-group">
										<label htmlFor="username">Username</label>
										<input 
											type="text"  
											placeholder='Enter User Name'
											name="username"
											value={username}
											onChange={e=> onInputChange(e)}
											required="required"/>
									</div>
									<div className="form-group">
										<label htmlFor="name">Name</label>
										<input 
											type="text"  
											placeholder='Enter Name'
											name="name"
											value={name}
											onChange={e=> onInputChange(e)}
											required="required"/>
									</div>
								</div>

								<div className="right-wrapper">
									<div className="form-group">
										<label htmlFor="name">Email</label>
										<input 
											type="email"  
											placeholder='Enter Email'
											name="email"
											value={email}
											onChange={e=> onInputChange(e)}
											required="required"/>
									</div>
									<div className="form-group">
										<label htmlFor="name">Phone</label>
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

							<div className="form-group">
								<button type="submit" className="submit-btn">Add User</button>
							</div>
							
						</form>
					</div>
				</div>
		  </div>
        </div>
	)
}

export default AddUser;