import React from 'react'
import{
    ContainerMenu,
    Container,
    Logo,
    LinksContainer,
    Item
} from './style'
import { Link } from 'react-router-dom';

const Menu = (propsMenu) => {
    return(
        <ContainerMenu>
            <Container>
                <Logo>
                    <h1>{propsMenu.logo}</h1>
                </Logo>
                <LinksContainer>
                    <Item>
                        <Link to="/">Home</Link>
                    </Item>
                    <Item>
                        <Link to="/home">Blog</Link>
                    </Item>
                    <Item>
                        <Link to="/contato">Contato</Link>
                    </Item>
                </LinksContainer>
            </Container>
        </ContainerMenu>
    );
}
export default Menu;