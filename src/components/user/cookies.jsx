import React, {useState} from 'react';
import ConfirmDialog from "./confirm-dialog";

const Cookie = () => {
    const [showConfirmDialog, setShowConfirmDialog] = useState(true);

    function handleConfirm() {
        setShowConfirmDialog(false);
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