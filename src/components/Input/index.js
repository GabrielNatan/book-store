export {
    Container,
    Title,
    InputText,
} from "./styles";

export const Input = ({type = "text",onChange,placeholder,title})=>{
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