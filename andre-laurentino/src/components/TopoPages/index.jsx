import React from "react"
import {
    ContainerTopo,
    Container
} from './style'

const TopoPages = (propsPage) => {
    return (
        <ContainerTopo>
            <Container>
                <h2>{propsPage.TitlePage}</h2>
                <p>{propsPage.DescriptionPage}</p>
            </Container>
        </ContainerTopo>
    );
}
export default TopoPages;