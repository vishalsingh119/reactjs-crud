import React, {useState,useEffect} from 'react';
import { useNavigate,useParams } from "react-router-dom";
import axios from 'axios';
import UserService from '../../Services/UserService';

const EditUser = () => {
	const { id } = useParams();
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

	useEffect(() => {
		loadUser();
	  }, []);

	const onSubmit = async (e)=>{
		e.preventDefault();
		await UserService.updateUser(id, user); 
		//after submit redirect user to home page
		history("/");
	}

	const loadUser = async () => {
		const result = await UserService.getUser(id);
		setUser(result);
	  };

	return (
		<div className="container">
			<div className="panel-wrapper">
				<div className="panel user-detail">
					<div className="panel-header">
					Update User Details
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
								<button type="submit" className="submit-btn">Update User</button>
							</div>
							
						</form>
					</div>
				</div>
		  </div>
        </div>
	)
}
export default EditUser;