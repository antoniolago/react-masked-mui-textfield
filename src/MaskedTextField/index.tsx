import React from "react";
import { IMaskInput, IMaskInputProps } from "react-imask";
import TextField, { TextFieldProps as MaterialTextFieldProps } from "@mui/material/TextField";
import Input, { InputProps as JoyInputProps } from "@mui/joy/Input";

export type MaskedTextFieldProps<MaskElement extends HTMLElement> = {
    imaskProps: IMaskInputProps<MaskElement>;
    lib?: "joy" | "material";
} & (MaterialTextFieldProps | JoyInputProps);

const TextMaskCustom = React.forwardRef<HTMLInputElement, MaskedTextFieldProps<any>>(
    function TextMaskCustom({ imaskProps, ...otherProps }, ref) {
        return (
            <IMaskInput
                {...imaskProps}
                inputRef={ref as React.Ref<HTMLInputElement>}
                onAccept={(value: any) => {
                    if (otherProps.onChange) {
                        otherProps.onChange({ target: { name: imaskProps.name!, value } } as React.ChangeEvent<HTMLInputElement>);
                    }
                }}
            />
        );
    }
);

const MaskedTextField: React.ForwardRefExoticComponent<
    React.PropsWithoutRef<MaskedTextFieldProps<HTMLInputElement>> & React.RefAttributes<HTMLInputElement>
> = React.forwardRef<HTMLInputElement, MaskedTextFieldProps<HTMLInputElement>>(
    function MaskedTextFieldFn({ imaskProps, lib, ...props }, ref): JSX.Element {
        if (lib === "material") {
            return (
                <TextField
                    {...(props as MaterialTextFieldProps)}
                    InputProps={{
                        inputComponent: TextMaskCustom as any,
                        inputProps: { ...imaskProps, onChange: props.onChange },
                    }}
                    inputRef={ref}
                />
            );
        } else {
            return (
                <Input
                    {...(props as JoyInputProps)}
                    slotProps={{
                        input: { ...imaskProps, onChange: props.onChange } as any,
                    }}
                    component={TextMaskCustom as any}
                    ref={ref}
                />
            );
        }
    }
);

export default MaskedTextField;