import React, { useEffect, useState } from "react";
import { IMaskInput } from "react-imask";
import TextField from "@mui/material/TextField";

interface CustomProps {
    onChange: (event: { target: { name: string; value: string } }) => void;
    name: string;
    mask: string;
    value: any;
}


const TextMaskCustom = React.forwardRef<HTMLElement, any>(
    function TextMaskCustom(maskProps, ref) {
        const { onChange, ...other } = maskProps;
        return (
            <IMaskInput
                {...other}
                name={maskProps.name}
                mask={maskProps.mask}
                value={maskProps.value}
                onAccept={(value: any) => {
                    onChange({ target: { name: maskProps.name, value } });
                }}
                overwrite
            />
        );
    }
);
export default function MaskedTextField(props: any) {
    return (
        <TextField
            {...props}
            InputProps={{
                inputComponent: TextMaskCustom,
                inputProps: { mask: props.mask, value: props.value, name: props.name, onChange: props.onChange },
            }}
        />
    );
}