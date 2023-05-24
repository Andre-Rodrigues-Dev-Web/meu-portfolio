import React from 'react'
import{
    ContainerMenu,
    Container,
    Logo,
    LinksContainer,
    Item
} from './style'

const Menu = (propsMenu) => {
    return(
        <ContainerMenu>
            <Container>
                <Logo>
                    <h1>{propsMenu.logo}</h1>
                </Logo>
                <LinksContainer>
                    <Item>

                    </Item>
                </LinksContainer>
            </Container>
        </ContainerMenu>
    );
}
export default Menu;