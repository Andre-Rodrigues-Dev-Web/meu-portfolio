import React from 'react'
import { 
    ContaineirCardProfile,
    HeaderCard,
    BodyCard
} from './style';

const CardProfile = () =>{
  return(
    <ContaineirCardProfile>
        <HeaderCard>
            <h2>Seja bem-vindo ao meu site pessoal, aqui posto sobre meus trabalhos, dicas entre outros posts interessantes</h2>
        </HeaderCard>
        <BodyCard>
            <p>Aproveite e siga minhas redes sociais</p>
        </BodyCard>
    </ContaineirCardProfile>
  ); 
}

export default CardProfile;