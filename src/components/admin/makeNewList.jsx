import React, {useEffect, useState} from "react";
import axios from "axios";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import TableHead from "@material-ui/core/TableHead";
import {useTranslation} from "react-i18next";

const List = () => {
    const { t } = useTranslation();
    const [userId, setUserId] = useState(sessionStorage.getItem('userId'));
    const [users, setUsers] = useState([]);
    const [amount, setAmount] = useState([]);

    useEffect(()=> {
        console.log("listUsers", sessionStorage.getItem('userId'));
        axios.get(sessionStorage.getItem('API_URL')+'/users')
            .then((response) => {
                if (response.status === 200) {
                    console.log('data');
                    console.log(response.data);
                    setAmount(response.data);
                }
            })
            .catch(e => console.log(e));

    }, [setAmount, userId]);

    function getIndividAmount(id)
     {
        console.log("listAmount", sessionStorage.getItem('userId'));
        axios.get(sessionStorage.getItem('API_URL')+'/assets/AssetAmount/'+id)
            .then((response) => {
                if (response.status === 200) {
                    console.log('data');
                    console.log(response.data);
                    setUsers(response.data);
                }
            })
            .catch((e) => {
                console.log(e);
            }, [setUsers, userId]);

        return (
            <div>
                {amount}
            </div>
        );
     }

return (
    <TableContainer component={Paper}>
        <Table aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell>{t('makeNewList.1')}</TableCell>
                    <TableCell >{t('makeNewList.2')}</TableCell>
                    <TableCell >{t('makeNewList.3')}</TableCell>
                    <TableCell >{t('makeNewList.4')}</TableCell>
                </TableRow>
            </TableHead>

            <TableBody>
                {
                    users.map((user) =>
                        (<TableRow key={user.id}>
                            <TableCell component="th" scope="row">
                                {user.firstName}
                            </TableCell>
                            <TableCell>{user.middleName}</TableCell>
                            <TableCell>{user.lastName}</TableCell>
                        </TableRow>)
                    )
                }
            </TableBody>
        </Table>
    </TableContainer>
);

};

export default List;