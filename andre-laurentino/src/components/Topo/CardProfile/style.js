import styled from 'styled-components'

const ContaineirCardProfile = styled.div`
    color: #fff;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 15px;
    margin: 0 auto;
    text-align: center;
    width: 90%;
    @media (min-width: 48em){
        width: 50%;
    }
`;

const BodyCard = styled.div`
    display: flex;
    align-items: center;
    p{
        font-size: 5vw;
    }
    @media(min-width: 48em){
        p{
            font-size: 1.5vw;
        }
    }
`;

const HeaderCard = styled.div`
    display: flex;
    align-items: center;
    h2{
        font-size: 5vw;
    }
    @media(min-width: 48em){
        h2{
            font-size: 2vw;
        }
    }
`;

export{
    ContaineirCardProfile,
    HeaderCard,
    BodyCard
}