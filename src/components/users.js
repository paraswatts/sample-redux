import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getUsers, addUserRequest } from '../redux/actions'
import './users.css'

function useInput({ type, placeholder/*...*/ }) {
    const [value, setValue] = useState("");
    const input = <input value={value} required placeholder={placeholder} onChange={e => setValue(e.target.value)} type={type} />;
    return [value, input];
}
const Screen = ({
    getUsers,
    users,
    addUserRequest
}) => {

    const [userList, updateUserList] = useState([])
    const [name, nameInput] = useInput({ type: "text", placeholder: "Enter Name" });
    const [email, emailInput] = useInput({ type: "text", placeholder: "Enter Email" });
    const [phone, phoneInput] = useInput({ type: "text", placeholder: "Enter Phone" });
    const [company, companyInput] = useInput({ type: "text", placeholder: "Enter Company" });
    useEffect(() => {

        getUsers({
            success: (response) => {
                console.log(response)
            },
            fail: (error) => console.log("error", error)
        })
    }, [])

    useEffect(() => {
        console.log("user from redux store", users)
        updateUserList(users)
    }, [users])


    const addNewUser = (event) => {
        event.preventDefault();
        console.log("name, email, company, phon", name, email, company, phone)
        let payload = {
            id: Math.floor(Math.random() * 100000) + 1,
            name: name,
            email: email,
            phone: phone,
            company: {
                name: company
            }
        }
        addUserRequest({
            payload: payload,
            success: (response) => {
                console.log(response)
            },
            fail: (error) => console.log("error", error)
        })
    }
    return (
        <div className='container'>
            <h2>Users List Redux Demo</h2>
            <form onSubmit={addNewUser}>
                <table>
                    <tbody>
                        <tr>
                            <td>{nameInput}</td>
                            <td>{emailInput}</td>
                            <td>{phoneInput}</td>
                            <td>{companyInput}</td>
                        </tr>
                    </tbody>
                </table>

                <button style={{ alignSelf: 'flex-end', marginTop: 10, marginBottom: 10, }}>Add New User</button>
            </form>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Company</th>
                    </tr>
                </thead>
                <tbody>
                    {userList && userList.length ? userList.map((obj, index) => (
                        <tr key={index}>
                            <td>{obj.name}</td>
                            <td>{obj.email}</td>
                            <td>{obj.phone}</td>
                            <td>{obj.company.name}</td>
                        </tr>)) : null}
                </tbody>
            </table>
        </div>
    )
}

const mapStateToProps = (state) => {
    return ({
        users: state.UserReducer.users
    });
}
const mapDispatchToProps = (dispatch) => {
    return {
        getUsers: (payload) => dispatch(getUsers(payload)),
        addUserRequest: (payload) => dispatch(addUserRequest(payload))

    }
}
export const UsersScreen = connect(mapStateToProps, mapDispatchToProps)(Screen);

