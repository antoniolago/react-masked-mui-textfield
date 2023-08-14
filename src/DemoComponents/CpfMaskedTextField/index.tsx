import React, { useState } from "react";
import { FormHelperText } from "@material-ui/core";
import MaskedTextField from "../../MaskedTextField";

const CpfMaskedTextField = (props: any) => {

    const [cpf, setCpf] = useState("");
    const [erroCpf, setErroCpf] = useState("");
    function replaceAll(string: string, token: string, newtoken: string) {
        try {
            while (string.indexOf(token) != -1) {
                string = string.replace(token, newtoken);
            }
        } catch (err) {
            string = "";
        }
        return string;
    }
    function retiraMascara(campo: string) {
        //=Array de possíveis caracteres de máscara a ser removidos
        var vetMascara = new Array('-', '(', ')', ':', '/', '.', ',', '_', ' ');

        //=Remoção dos caracteres de máscara da String de entrada <campo>
        for (var i = 0; i < vetMascara.length; i++) {
            campo = replaceAll(campo, vetMascara[i], '');
        }
        //=Retorno do campo sem a máscara
        return campo;
    }

    function IsCPF(cpf: string) {
        if (cpf == "") {
            return cpf;
        }
        cpf = retiraMascara(cpf); //retira máscara
        if (
            cpf.length != 11 ||
            cpf == '00000000000' ||
            cpf == '11111111111' ||
            cpf == '22222222222' ||
            cpf == '33333333333' ||
            cpf == '44444444444' ||
            cpf == '55555555555' ||
            cpf == '66666666666' ||
            cpf == '77777777777' ||
            cpf == '88888888888' ||
            cpf == '99999999999'
        )
            return false;
        var add = 0;
        for (var i = 0; i < 9; i++) add += parseInt(cpf.charAt(i)) * (10 - i);
        var rev = 11 - (add % 11);
        if (rev == 10 || rev == 11) rev = 0;
        if (rev != parseInt(cpf.charAt(9))) return false;
        add = 0;
        for (i = 0; i < 10; i++) add += parseInt(cpf.charAt(i)) * (11 - i);
        rev = 11 - (add % 11);
        if (rev == 10 || rev == 11) rev = 0;
        if (rev != parseInt(cpf.charAt(10))) return false;
        return true;
    }
    const handleChangeCpf = (e: any) => {
        var valueChanged = e.target.value != cpf;
        if (valueChanged) setCpf(e.target.value);
        var cpfLimpo = e.target.value.replaceAll("_", "").replaceAll("-", "").replaceAll(".", "");
        var isCpfInvalido = cpfLimpo.length == 11 && !IsCPF(cpfLimpo);
        setErroCpf(isCpfInvalido ? "CPF inválido" : "")
    }
    return (

        <div>
            <h4 className="bold mb-2">CPF<span style={{ color: "var(--danger)" }}> *</span></h4>
            <MaskedTextField
                name="cpf"
                size="small"
                placeholder="000.000.000-00"
                mask="000.000.000-00"
                value={cpf}
                onChange={handleChangeCpf}
                error={erroCpf != ""}
                style={{ width: '100%' }}
                variant="outlined" />
            <br />
            <FormHelperText error>
                {erroCpf}
            </FormHelperText>
        </div>
    )
}

export default CpfMaskedTextField;