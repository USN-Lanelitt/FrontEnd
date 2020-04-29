import axios from "axios";

export const adminRefrech = (setSelectedLevel) =>{
    axios.get('/getLevel').then((response) => {
        if (response.status === 200) {
            console.log(response.data);
            setSelectedLevel(response.data);
        }
    })
        .catch(e => console.log(e));

}
