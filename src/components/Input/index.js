import { useState } from "react";
import {
    Container,
    Title,
    InputText,
} from "./styles";

export const Input = ({type = "text",onChange,placeholder,title})=>{
    const [value,setValue] =useState('')
    function handleChangeValue(e){
        onChange(e.targe.value)
    }

    return(
        <Container>
            <Title>{title}</Title>
            <InputText
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={handleChangeValue}
            />
        </Container>
    )
}