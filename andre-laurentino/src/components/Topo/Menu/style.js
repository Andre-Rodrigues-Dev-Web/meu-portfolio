import styled from 'styled-components'

const ContainerMenu = styled.nav`
    position: fixed;
`;

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 15px 10px;
`;

const Logo = styled.div`
    position: fixed;
    h1{
        color: #fff;
        text-transform: uppercase;
    }
`;

const LinksContainer = styled.ul`
    position: fixed;
`;
const Item = styled.li`
    a{
        color: #fff;
    }
`;
export{
    ContainerMenu,
    Container,
    Logo,
    LinksContainer,
    Item
}