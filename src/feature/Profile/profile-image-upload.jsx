import axios from "axios";

const ProfileImageUpload = (file) => {
    if (file.raw) {
        console.log(file.raw);
        let data = new FormData();
        data.append('file', file.raw, file.fileName);
        data.append('userId', sessionStorage.getItem('userId'));

        axios.post('/profileimageUpload', data, {
            headers: {
                'accept': 'application/json',
                'Accept-Language': 'en-US,en;q=0.8',
                'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
            }
        })
            .then((response) => {
                //handle success
                if (response.status == 200) { // 200 at api har gått bra
                    var aData = response.data;
                    if (aData['code'] == 200) {// da har lagring av bilde gått bra
                        console.log('Bildeopplasting ok');
                        console.log(aData['image']);
                        sessionStorage.setItem('profileImage', aData['image']);
                    } else if (aData['code'] == 400) {
                        alert('Feil ved bildeopplasting');
                    }
                }
            }).catch((error) => {
            //handle error
        });
    }
};

export default ProfileImageUpload;
