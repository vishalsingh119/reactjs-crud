import './Card.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faGlobe } from '@fortawesome/free-solid-svg-icons'



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
      </div>
	  </>
	)
}

export default Card;