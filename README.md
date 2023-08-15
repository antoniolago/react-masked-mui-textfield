# react-masked-mui-textfield

Component that implements TextField + IMaskInput

# Demo
https://antoniolago.github.io/react-masked-mui-textfield/

# Usage
Install it by running `npm install react-masked-mui-textfield --save` or `yarn add react-masked-mui-textfield`. Then:

```jsx
import MaskedTextField from 'react-masked-mui-textfield';

//Use props you would usually use on mui's TextField and IMaskInput
//Example:
<div>
    <h4 className="bold mb-2">Mobile Telephone (Brasil)<span style={{ color: "var(--danger)" }}> *</span></h4>
    <MaskedTextField
        name="Telephone"
        size="small"
        placeholder="(00) 0 0000-0000"
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
```
