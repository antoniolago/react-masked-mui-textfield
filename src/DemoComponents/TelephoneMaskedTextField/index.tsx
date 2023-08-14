import React, { useState } from "react";
import { FormHelperText } from "@material-ui/core";
import MaskedTextField from "MaskedTextField";


const TelephoneMaskedTextField = (props: any) => {

    const [telephone, setTelephone] = useState("");
    const [erroTelephone, setErroTelephone] = useState("");
    return (

        <div>
            <h4 className="bold mb-2">Mobile Telephone (Brasil)<span style={{ color: "var(--danger)" }}> *</span></h4>
            <MaskedTextField
                name="Telephone"
                size="small"
                placeholder="(51) 9 0000-0000"
                mask="(00) 0 0000-0000"
                value={telephone}
                onChange={(e: any) => setTelephone(e.target.value)}
                error={erroTelephone != ""}
                style={{ width: '100%' }}
                variant="outlined" />
            <br />
            <FormHelperText error>
                {erroTelephone}
            </FormHelperText>
        </div>
    )
}

export default TelephoneMaskedTextField;