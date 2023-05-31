import styled from "styled-components"

const ContainerTopo = styled.header`
    background: #000000;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #434343, #000000);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #434343, #000000); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

const Container = styled.div`
    color: #fff;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 0 auto;
    padding: 4rem 0;
    h2{
        font-size: 5vw;
        position: relative;
        &:after{
            background-color: crimson;
            border-radius: 10px;
            content: "";
            height: 4px;
            position: absolute;
            left: 0;
            top: 45px;
            width: 60px;
        }
        @media(min-width: 48em){
            font-size: 2vw;
        }
    }
    p{
        font-size: 2.5vw;
    }
    @media(min-width: 48em){
        padding: 4rem 0;
        width: 90%;
    }
`;

export {
    ContainerTopo,
    Container
}