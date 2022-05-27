import React, {useState,useEffect} from 'react';
import { useNavigate,useParams } from "react-router-dom";
import UserService from '../../Services/UserService';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
	const [errors, setErrors] = useState({});


	const onInputChange = (e) =>{
		console.log(e.target.value)
		setUser({...user, [e.target.name]: e.target.value})
	}

	useEffect(() => {
		loadUser();
	  }, []);

	const onSubmit = async (e)=>{
		e.preventDefault();
		if (validateForm()) {
			notify();
			await UserService.updateUser(id, user); 
			//after submit redirect user to home page
			history("/");
		}
	}

	const loadUser = async () => {
		const result = await UserService.getUser(id);
		setUser(result);
	  };

	  const notify = () => {
		toast.success('🦄 User Updated', {
			position: "top-right",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			});
	};

	const validateForm =() => {

		let fields = user;
		let errors = {};
		let formIsValid = true;
  
		if (!fields["username"]) {
		  formIsValid = false;
		  errors["username"] = "Please enter username.";
		}
  
		if (typeof fields["username"] !== "undefined") {
		  if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
			formIsValid = false;
			errors["username"] = "Please enter alphabet characters only.";
		  }
		}

		if (!fields["name"]) {
			formIsValid = false;
			errors["name"] = "Please enter name.";
		  }
	
		  if (typeof fields["name"] !== "undefined") {
			if (!fields["name"].match(/^[a-zA-Z ]*$/)) {
			  formIsValid = false;
			  errors["name"] = "Please enter alphabet characters only.";
			}
		  }
  
		if (!fields["email"]) {
		  formIsValid = false;
		  errors["email"] = "*Please enter email-ID.";
		}
  
		if (typeof fields["email"] !== "undefined") {
		  //regular expression for email validation
		  var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
		  if (!pattern.test(fields["email"])) {
			formIsValid = false;
			errors["email"] = "*Please enter valid email-ID.";
		  }
		}
  
		if (!fields["phone"]) {
		  formIsValid = false;
		  errors["phone"] = "*Please enter mobile no.";
		}
  
		if (typeof fields["phone"] !== "undefined") {
		  if (!fields["phone"].match(/^[0-9]{10}$/)) {
			formIsValid = false;
			errors["phone"] = "*Please enter valid mobile no.";
		  }
		}

  
		setErrors(errors);
		return formIsValid;
  
  
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
							<div className="form-wrapper">
								<div className="left-wrapper">
									<div className="form-group">
										<label htmlFor="username">Username</label>
										<input 
											type="text"  
											placeholder='Enter User Name'
											name="username"
											value={username}
											onChange={e=> onInputChange(e)}/>
										<div className="errorMsg">{errors.username}</div>	
									</div>
									<div className="form-group">
										<label htmlFor="name">Name</label>
										<input 
											type="text"  
											placeholder='Enter Name'
											name="name"
											value={name}
											onChange={e=> onInputChange(e)}/>
										<div className="errorMsg">{errors.name}</div>	
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
											onChange={e=> onInputChange(e)}/>
										<div className="errorMsg">{errors.email}</div>	
									</div>
									<div className="form-group">
										<label htmlFor="name">Phone</label>
										<input 
											type="text"  
											placeholder='Enter Phone No.'
											name="phone"
											value={phone}
											onChange={e=> onInputChange(e)}/>
										<div className="errorMsg">{errors.phone}</div>	
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