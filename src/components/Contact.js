import React from 'react';
import './Contact.css';

const avatar = 'https://randomuser.me/api/portraits/women/53.jpg';

const Contact = () => {
    return (
        <div className="Contact">
            <img src={avatar} className="avatar" alt=""/>
            <div>
                <h4 className="name">Vicki Washington</h4>
                <div className="status">
                    <div className="status-online"></div>
                    <p className="status-text">online</p>
                </div>
            </div>
        </div>
    );
}

export default Contact;