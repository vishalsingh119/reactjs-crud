import Card from '../../components/Card/Card';
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import './UserList.scss';

const UserList = () => {
	const [user, setUser] = useState([]);

	useEffect(() => {
		loadUserData();
	},[])

	const loadUserData = async () =>{
		const resp = await axios.get('http://localhost:3333/users');
		setUser(resp.data);
		console.log(resp.data)
		console.log(user)
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