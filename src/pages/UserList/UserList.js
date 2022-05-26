import Card from '../../components/Card/Card';
import React, {useState, useEffect} from 'react';
import './UserList.scss';
import UserService from '../../Services/UserService';

const UserList = () => {
	const [user, setUser] = useState([]);

	useEffect(() => {
		loadUserData();
	},[])

	const loadUserData = async () =>{
		UserService.getUserList()
		.then(response => {
			setUser(response)
		}).catch( err => {
			console.log(err)
		})
	}

	return (
		<div className='body-wrapper container'>
			<div className="card-group">
			{
				user.map( (user, index)=>{
					return (
						<Card key={index} user={user} />
					)
				})
			}
			</div>
		</div>
	)
}

export default UserList;