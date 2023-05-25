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
    flex-direction: column;
    .links_social{
        display: flex;
        align-items: center;
        gap: 30px;
        margin-top: 20px;
        li {
        display: inline-block;
        margin-right: 10px;
            a {
                color: #fff;
                display: inline-block;
                font-size: 30px;
                position: relative;
                .tooltip {
                    display: none;
                    position: absolute;
                    top: 100%;
                    left: 50%;
                    transform: translateX(-50%);
                    padding: 6px 8px;
                    background-color: #333;
                    color: #fff;
                    font-size: 14px;
                    border-radius: 4px;
                    white-space: nowrap;
                }
                &:hover .tooltip {
                    display: block;
                }
            }
        }
    }
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