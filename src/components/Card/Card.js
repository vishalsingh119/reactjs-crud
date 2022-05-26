import './Card.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faGlobe,faPenToSquare,faTrash,faHeart } from '@fortawesome/free-solid-svg-icons'



const Card = (props) => {
	const { user } = props;
	return (
		<>
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
				<div class="user-action">
					<div class="action-list">
						<button className="btn-icon" title="Like">
							<FontAwesomeIcon className="icon-heart" icon={faHeart} />
						</button>
					</div>

					<div class="action-list">
						<button className="btn-icon" title="Edit User">
							<FontAwesomeIcon className="icon-pencil" icon={faPenToSquare} />
						</button>
					</div>

					<div class="action-list">
						<button className="btn-icon" title="Delete User">
							<FontAwesomeIcon className="icon-trash" icon={faTrash} />
						</button>
					</div>
				</div>
      </div>
	  </>
	)
}

export default Card;