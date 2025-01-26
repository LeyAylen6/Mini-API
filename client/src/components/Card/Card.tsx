import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Card.css';
import { CardProps } from '../../interfaces';

const Card: React.FC<CardProps> = ({ user }) => {
    const { name, email, age } = user;

    const randomAvatar = `https://ui-avatars.com/api/?name=${name}&size=200&background=random`

    return (
        <div className="card">
            <img src={randomAvatar} className="card-img-top" alt={name} />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">Email: {email}</p>
                <p className="card-text">Edad: {age ?? 'No disponible'}</p>
            </div>
        </div>
    );
};

export default Card;