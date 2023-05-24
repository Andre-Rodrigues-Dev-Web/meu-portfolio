import styled from 'styled-components'

const ContaineirTopo = styled.header`
    background: #000000;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #434343, #000000);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #434343, #000000); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 40vh;
    @media (min-width: 48em){
        min-height: 60vh;
    }
`;

export{
    ContaineirTopo
}