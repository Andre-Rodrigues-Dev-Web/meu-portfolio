import React from 'react'
import { ContaineirTopo } from './style';
import CardProfile from './CardProfile';
import Menu from './Menu';

const Topo = () =>{
  return(
    <>
        <Menu
            logo="André Laurentino"
        />
        <ContaineirTopo>
            <CardProfile/>
        </ContaineirTopo>
    </>
  ); 
}

export default Topo;