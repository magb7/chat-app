import React from 'react';
import './Contact.css';
import PropTypes from 'prop-types';


const Contact = ({avatar, name, online}) => {
    return (
        <div className="Contact">
            <img src={avatar} className="avatar" alt={name} />
            <div>
                <h4 className="name">{name}</h4>
                <div className="status">
                    <span className={online ? "status-online" : "status-offline"}></span>
                    <p className="status-text" >{online ? "online" : "offline"}</p>
                </div>
            </div>
        </div>
    );
};

Contact.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    online : PropTypes.bool.isRequired,
};

export default Contact;