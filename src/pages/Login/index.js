import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import {
    Container,
    Logo,
    Form,
    Tilte,
    SubTitle,

} from "./styles";

export const Login = ({})=>{

    return(
        <Container>
           <Logo>

           </Logo>
           <Form>
                <Tilte>Welcome!</Tilte>
                <SubTitle>
                    It is a long established fact that a reader will be 
                    distracted by thereadable content of a page when looking 
                    at its layout. The point of using Lorem Ipsum is that it.
                </SubTitle>
                <Input
                    type="text"
                    placeholder="Email"
                />
                <Input
                    type="password"
                    placeholder="password"
                />
                <Button/>
                <Button/>
           </Form>
        </Container>
    )
}