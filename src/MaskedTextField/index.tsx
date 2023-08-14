import React from "react";
import { IMaskInput } from "react-imask";
import TextField from "@mui/material/TextField";

interface MaskedTextFieldProps {
    onChange: (event: { target: { name: string; value: string } }) => void;
    name: string;
    mask: string;
    value: any;
}

const CustomImask = React.forwardRef<HTMLElement, MaskedTextFieldProps>(
    function TextMaskCustom(maskProps, ref) {
        const { onChange, ...inheritedProps } = maskProps;
        return (
            <IMaskInput
                {...inheritedProps}
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

const MaskedTextField = (props: any) =>
    <TextField
        {...props}
        InputProps={{
            inputComponent: CustomImask,
            inputProps: {
                mask: props.mask,
                value: props.value,
                name: props.name,
                onChange: props.onChange
            }
        }}
    />

export default MaskedTextField;