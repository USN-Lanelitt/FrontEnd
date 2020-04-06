import React, {useState} from 'react';
import ConfirmDialog from "./confirm-dialog";

const Cookie = () => {
    const [showConfirmDialog, setShowConfirmDialog] = useState(true);
    console.log('cookie');

    function handleConfirm() {
        setShowConfirmDialog(false);
        console.log('cookie2');
    }

    return (
        <ConfirmDialog
            title="Informasjonskapsel"
            message="LåneLitt bruker informasjonskapsler (cookies) på sine nettsider til bl.a.
                    stastikk og skjemaoppdateriger. Hvis du godtar dette, kan du fortsette å bruke våre nettsider som vanlig."
            onConfirm={handleConfirm}
            confirmButtonText="OK"
            open={showConfirmDialog}

        />
    );

};

export default Cookie;