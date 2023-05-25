/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { ContaineirCardProfile, HeaderCard, BodyCard } from './style';

const CardProfile = () => {
  return (
    <ContaineirCardProfile>
      <HeaderCard>
        <h2>Seja bem-vindo ao meu site pessoal, aqui posto sobre meus trabalhos, dicas entre outros posts interessantes</h2>
      </HeaderCard>
      <BodyCard>
        <p>Aproveite e siga minhas redes sociais</p>
        <ul className='links_social'>
          <li>
            <a href="#" target='_blank' rel="noopener noreferrer">
              <FaFacebook />
              <span className="tooltip">Facebook</span>
            </a>
          </li>
          <li>
            <a href="#" target='_blank' rel="noopener noreferrer">
              <FaInstagram />
              <span className="tooltip">Instagram</span>
            </a>
          </li>
        </ul>
      </BodyCard>
    </ContaineirCardProfile>
  );
}

export default CardProfile;
