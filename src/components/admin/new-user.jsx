import axios from "axios";

function newUser(nickname, firstname, middlename, lastname, address, address2, zipCode, phone, email, usertype, active, newsSubscription, userterms) {
    console.log("editUser ", sessionStorage.getItem('userId'));
    axios.post(sessionStorage.getItem('API_URL')+'/api/register', {
        nickname: nickname,
        firstname: firstname,
        middlename: middlename,
        lastname: lastname,
        address: address,
        address2: address2,
        zipCode: zipCode,
        phone: phone,
        email: email,
        usertype: usertype,
        active: active,
        newsSubscription: newsSubscription,
        userterms: userterms,
        }).then((response) => {
            if (response.status === 200) {
                console.log(response.data);
                {/*
                Trenger firebase ting

                try {
                    app
                        .auth()
                        .createUserWithEmailAndPassword(email.value, password.value);
                    history.push("/login");
                    console.log(history)
                } catch (error) {
                    alert(error);
                }
            } else {
                alert('FEIL: feil ved registrering');*/}
            }
        })
        .catch(e => console.log(e));
}

export default newUser;