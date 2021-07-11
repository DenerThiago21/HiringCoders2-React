import React, { useState } from 'react';
import axios from 'axios';
import * as S from './styled'

export default function Home(props) {
    const [ usuario, setUsuario ] = useState('');

    function handlePesquisa() {
        axios.get(`https://api.github.com/users/${usuario}/repos`)
             .then((response) => {
               console.log(response.data);
             });
      }
      
      return (
        <S.Container>
          <S.Input className="usuarioInput" value={usuario} placeholder="Usuario" onChange={(e) => {setUsuario(e.target.value)}} /> 
          <S.Button type="button" onClick={handlePesquisa}>Pesquisar</S.Button>
        </S.Container>
      );
}