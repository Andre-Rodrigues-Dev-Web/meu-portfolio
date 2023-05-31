import styled from 'styled-components'

const ContainerMenu = styled.nav`
    position: fixed;
    width: 100%;
`;

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 20px 10px;
`;

const Logo = styled.div`
    width: 20%;
    h1{
        color: #fff;
        text-transform: uppercase;
    }
`;

const LinksContainer = styled.ul`
   display: none;
   @media(min-width: 48em){
    display: flex;
    align-items: center;
    gap: 20px;
   }
`;
const Item = styled.li`
    padding: 10px;
    a{
        color: #fff;
    }
    @media(min-width: 48em){
        padding: 0;
    }
`;

export{
    ContainerMenu,
    Container,
    Logo,
    LinksContainer,
    Item
}