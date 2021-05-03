import React, { useState } from 'react';
import Card from '../UI/Card'
import Button from '../UI/Button'
import ErrorModel from '../UI/ErrorModel'
import classes from './AddUsers.module.css'
const AddUsers = (props) => {
    const [enteredName, setEnteredName] = useState("");
    const [enteredAge, setEnteredAge] = useState("");
    const [error, setError] = useState();

    const nameHandler = (event) => {
        setEnteredName(event.target.value)
    }

    const ageHandler = (event) => {
        setEnteredAge(event.target.value)
    }
    const submitHandler = (Event) => {
        Event.preventDefault()
        if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values).',
            });
            return
        }

        if (+enteredAge < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (> 0).',
            });
            return
        }
        props.onAddUser(enteredName, enteredAge)
        setEnteredName('')
        setEnteredAge('')

    }

    const removeErrorModal = ()=>{
        setError(null)
    }
    return (
        <div>
            {error && <ErrorModel title={error.title} msg={error.message} removeErrorModal={removeErrorModal}/>}
            <Card className={classes.input}>
                <form onSubmit={submitHandler}>
                    <label htmlFor="userName">userName</label>
                    <input id="userName" type="text" value={enteredName} onChange={nameHandler} />

                    <label htmlFor="age">Age</label>
                    <input id="age" type="number" value={enteredAge} onChange={ageHandler} />

                    <Button type="submit">Add User</Button>

                </form>
            </Card>
        </div>
    );
};

export default AddUsers;