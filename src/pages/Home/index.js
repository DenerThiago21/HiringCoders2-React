import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import * as S from './styled'

export default function Home(props) {
    const history = useHistory();
    const [ usuario, setUsuario ] = useState('');
    const [ erro, setErro ] =useState(false);

    function handlePesquisa() {
        axios.get(`https://api.github.com/users/${usuario}/repos`)
             .then((response) => {
               const repositories = response.data;
               const repositoriesName = [];
               repositories.map((repository) => {
                 repositoriesName.push(repository.name);
               })
               localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
               setErro(false);
               history.push('/repositories');
             })
             .catch(err => {
                setErro(true);
             });
      }
      
      return (
        <S.HomeContainer>
          <S.Content>
            <S.Input className="usuarioInput" value={usuario} placeholder="Usuario" onChange={(e) => {setUsuario(e.target.value)}} /> 
            <S.Button type="button" onClick={handlePesquisa}>Pesquisar</S.Button>
          </S.Content>
          { erro ? <S.ErroMsg>Ocorreu um erro</S.ErroMsg> : '' }
        </S.HomeContainer>
        
      );
}