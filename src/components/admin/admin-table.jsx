import React, {useEffect, useState} from 'react';
import MaterialTable from 'material-table';
import axios from "axios";
import editUser from "./edit-user";

const AdminTable = () => {
    let list = [];
    const [userId, setUserId] = useState(sessionStorage.getItem('userId'));
    const [users, setUsers] = useState([]);
        useEffect(()=> {
            console.log("admin", sessionStorage.getItem('userId'));
            axios.get(sessionStorage.getItem('API_URL')+'/users')
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
            { title: 'Visningsnavn', field: 'nickname' },
            { title: 'Fornavn', field: 'firstName' },
            { title: 'Mellomnavn', field: 'middleName' },
            { title: 'Etternavn', field: 'lastName' },
            { title: 'E-post', field: 'email' },
            { title: 'Brukertype', field: 'usertype' },
            { title: 'Aktiv', field: 'active'},
            { title: 'Nyheter', field: 'newsSubscription'},
        ],
        data: users
    });


    return (
        <div >
            <MaterialTable
                title="Administrere brukere"
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
                                    newData.phone,
                                    newData.email,
                                    newData.usertype,
                                    newData.active,
                                    newData.newsSubscription);
                                console.log(
                                    newData.id,
                                    newData.nickname,
                                    newData.firstName,
                                    newData.middleName,
                                    newData.lastName,
                                    newData.phone,
                                    newData.email,
                                    newData.usertype,
                                    newData.active,
                                    newData.newsSubscription);
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