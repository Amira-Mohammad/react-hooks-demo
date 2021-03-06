import React from 'react';
import Card from '../UI/Card'
import classes from './UserList.module.css'
const UsersList = (props) => {
    const { users } = props;
    if (users.length === 0) return null;
    return (

        <Card className={classes.users}>
            <ul>
                {users.map((user) => (
                    <li>{user.name} {user.age} years old</li>
                ))}

            </ul>
        </Card>


    );
};

export default UsersList;