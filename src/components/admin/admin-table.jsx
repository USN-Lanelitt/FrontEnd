/*Nicole har jobbet med denne siden med hjelp av John og Farhad*/

import React, {useEffect, useState} from 'react';
import MaterialTable from 'material-table';
import axios from "axios";
import editUser from "./edit-user";

const AdminTable = () => {
    const [userId, setUserId] = useState(sessionStorage.getItem('userId'));

    /*--------------Henter alle brukerne-------------*/
    const [users, setUsers] = useState([]);
        useEffect(()=> {
            console.log("admin", sessionStorage.getItem('userId'));
            axios.get('/users')
                .then((response) => {
                    if (response.status === 200) {
                        console.log('data');
                        console.log(response.data);
                        setUsers(response.data);
                    }
                })
                .catch(e => console.log(e));

        }, [setUsers, userId]);

    const [state, setState] = React.useState({
        columns: [
            { title: 'Id', field: 'id' },
            { title: 'Nickname', field: 'nickname' },
            { title: 'Firstname', field: 'firstName' },
            { title: 'Middlename', field: 'middleName' },
            { title: 'Lastname', field: 'lastName' },
            { title: 'Usertype', field: 'usertype' },
            { title: 'Active', field: 'active'},
        ],
        data: users
    });


    return (
        <div >

            {/*Tabell er hentet ferdiglagd fra Material-ui*/}
            <MaterialTable
                title='User administration'
                columns={state.columns}
                data={users}
                editable={{
                    onRowAdd: (newData) =>
                        new Promise((resolve) => {
                            setTimeout(() => {
                                resolve();
                                setState((prevState) => {
                                    const data = [...prevState.data];
                                    data.push(newData);
                                    return { ...prevState, data };
                                });
                            }, 600);
                        }),
                    onRowUpdate: (newData, oldData) =>
                        new Promise((resolve) => {
                            setTimeout(() => {
                                resolve();
                                editUser(
                                    newData.id,
                                    newData.nickname,
                                    newData.firstName,
                                    newData.middleName,
                                    newData.lastName,
                                    newData.usertype,
                                    newData.active
                                );
                                console.log(
                                    newData.id,
                                    newData.nickname,
                                    newData.firstName,
                                    newData.middleName,
                                    newData.lastName,
                                    newData.usertype,
                                    newData.active
                                );
                                if (oldData) {
                                    setState((prevState) => {
                                        console.log(oldData.id);
                                        const data = [...prevState.data];
                                        data[data.indexOf(oldData)] = newData;
                                        return { ...prevState, data };
                                    });
                                }
                            }, 600);
                        }),

                }}
            />
        </div>
    );
};

export default AdminTable;
