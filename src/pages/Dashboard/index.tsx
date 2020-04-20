import React from 'react';
import {FiChevronRight} from 'react-icons/fi'

import logoImage from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImage} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input type="text" placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/22511426?s=460&u=6ccee55e2afaa3e8ac11d8bd6c190a826a87b040&v=4"
            alt="Henrique Tinem" />

          <div>
            <strong>AAA TO COM DEPRESSAO</strong>
            <p>AAAAA NAO TO MAIS NAO</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
