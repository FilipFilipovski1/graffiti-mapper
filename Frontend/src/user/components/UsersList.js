import React from 'react';
import './UsersList.css'
import UserItem from './UserItem';
import Card from '../../shared/components/UIElements/Card';
const UsersList=props=>{

    
    const onSortChange = (name) => {
        props.sorting(name);
    }

    if(props.items.length === 0){
        return (
            <div className='center'>
                <Card>
                <h2>No users found</h2>
                </Card>
            </div>
        );
    }
    return (
        <div>
        <div className="forma-main">
            <label className="forma">Search User: </label>
            <input className="forma2" type="text" placeholder="type Filip for example ..." onChange={e => onSortChange(e.target.value)}/>
        </div>

    <ul className='users-list'>
        {props.items.map(user => (
            <UserItem 
            key={user.id} 
            id={user.id} 
            image={user.image} 
            name={user.name} 
            graffitiCount={user.places.length}
            />
        )
        )}
    </ul>

    </div>)
};

export default UsersList;