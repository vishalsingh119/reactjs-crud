import './UserView.scss';
import { useParams } from 'react-router-dom';
import UserService from '../../Services/UserService';
import React, {useState, useEffect} from 'react';


const UserView = () => {
	const { id } = useParams();
	const [user, setUser] = useState([]);

	useEffect(() => {
		loadUserData();
	},[])

	const loadUserData = async () =>{
		await UserService.getUser(id)
		.then(response => {
			setUser(response)
		}).catch( err => {
			console.log(err)
		})
	}

	return (
		
        <div className="container">
			<div className="panel-wrapper">
				<div className="panel user-detail">
					<div className="panel-header">
					User Details
					</div>
					<div className="panel-content">
						<div className="panel-content--left">
							<div className="panel-content__image">
								<img src={user['profile-pic']} alt="avatar" />
							</div>
							<div className="panel-content__base-info">
								<ul>
									<li>
										<span className="bold">Username:</span>
										<span>
											<span> {user.username}</span> 
										</span>
									</li>
									<li>
									<span className="bold">Name:</span>
									<span>
										{user.name}
									</span>
									</li>
									<li>
										<span className="bold">Email:</span>
										<span>
											<span> {user.email}</span> 
										</span>
									</li>
								</ul>
							</div>
						</div>
						<div className="panel-content__right">
							<div className="panel-content__base-info">
								<ul>
									<li>
										<span className="bold">Website:</span>
										<span>{user.website}</span>
									</li>
									<li>
										<span className="bold">Phone:</span>
										<span>{user.phone}</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
		  </div>
        </div>
	)
}

export default UserView;