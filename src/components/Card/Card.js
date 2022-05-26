import './Card.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faGlobe,faPenToSquare,faTrash,faHeart, faEye } from '@fortawesome/free-solid-svg-icons'
import React, {useState, useEffect} from 'react';
import UserService from '../../Services/UserService';
import { useNavigate } from "react-router-dom";


const Card = (props) => {
	const { user } = props;
	const [users, setUsers] = useState([]);
    const history = useNavigate();


	useEffect(() => {
		loadUserData();
	},[])

	const loadUserData = async () =>{
		UserService.getUserList()
		.then(response => {
			setUsers(response)
		}).catch( err => {
			console.log(err)
		})
	}

	const deleteUser = async (id) => {
		UserService.deleteUser(id)
		.then(response => {
			setUsers(response)
		}).catch( err => {
			console.log(err)
		})
		loadUserData();
	}

	return (
		<div className="card">
			<div className="card-image">
				<img src={user['profile-pic']} alt="Card image cap" />
			</div>
			<div className="card-body">
				<div className="card-title">{user.name}</div>
				<div className="user-info">
					<div className="info-list">
						<FontAwesomeIcon icon={faEnvelope} />
						<div className="info-text">{user.email}</div>
					</div>

					<div className="info-list">
						<FontAwesomeIcon icon={faPhone} />
						<div className="info-text">{user.phone}</div>
					</div>

					<div className="info-list">
						<FontAwesomeIcon icon={faGlobe} />
						<div className="info-text">{user.website}</div>
					</div>
				</div>
			</div>
				{/* user action's like edit, delete etc */}
				<div className="user-action">
					<div className="action-list">
						<button className="btn-icon" title="Like" onClick={() => { history(`/view-user/${user.id}`);}}>
						<FontAwesomeIcon icon={faEye} />
						</button>
					</div>

					<div className="action-list">
						<button className="btn-icon" title="Like">
							<FontAwesomeIcon className="icon-heart" icon={faHeart} />
						</button>
					</div>

					<div className="action-list">
						<button className="btn-icon" title="Edit User" onClick={() => { history(`/edit/${user.id}`);}}>
							<FontAwesomeIcon className="icon-pencil" icon={faPenToSquare} />
						</button>
					</div>

					<div className="action-list">
						<button className="btn-icon" title="Delete User" onClick={() => deleteUser(user.id)}>
							<FontAwesomeIcon className="icon-trash" icon={faTrash} />
						</button>
					</div>
				</div>
      </div>
	)
}

export default Card;