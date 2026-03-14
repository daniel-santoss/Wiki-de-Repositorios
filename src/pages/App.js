import { useState } from 'react';
import { api } from '../services/api';

import Input from '../components/Input';
import Button from '../components/Button';
import ItemRepo from '../components/ItemRepo';
import { Container } from './styles';

function App() {
  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {
    if (!currentRepo) return;

    try {
      const { data } = await api.get(`repos/${currentRepo}`);

      if (data.id) {
        const isExist = repos.find(repo => repo.id === data.id);

        if (!isExist) {
          setRepos(prev => [...prev, data]);
          setCurrentRepo(''); // Limpa o input após adicionar
          return;
        }
        alert('Repositório já está na lista.');
      }
    } catch (error) {
      alert('Repositório não encontrado.');
    }
  };

  const handleRemoveRepo = (id) => {
    const reposFiltrados = repos.filter((repo) => repo.id !== id);
    setRepos(reposFiltrados);
  };

  return (
    <Container>
      <img src="https://raw.githubusercontent.com/digitalinnovationone/trilha-react-desafio-2/master/src/assets/github.png" width={72} height={72} alt="github logo" />
      
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)} />
      <Button onClick={handleSearchRepo} />
      
      {repos.map(repo => (
        <ItemRepo key={repo.id} handleRemoveRepo={handleRemoveRepo} repo={repo} />
      ))}
    </Container>
  );
}

export default App;