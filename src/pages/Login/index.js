import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import {
    Container,
    Logo,
    Form,
    Tilte,
    SubTitle,
    Link,
    Left,
    Right,
    ContImage,
    TitleImage,
    Text,
} from "./styles";
import LogoImage from "./logo-colum.png"
export const Login = ({})=>{

    return(
        <Container>
            <Left>
                <Logo>
                    <img src={LogoImage}/>
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
                        <Link>Create account</Link>
                </Form>

            </Left>
            <Right>
                <ContImage>

                </ContImage>
                <TitleImage>Promoção de outono</TitleImage>
                <Text>
                    It is a long established fact that a reader will be 
                    distracted by thereadable content of a page when looking 
                    at its layout. The point of using Lorem Ipsum is that it.
                </Text>
            </Right>
        </Container>
    )
}