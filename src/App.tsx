import React, { useState, useEffect } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

const App: React.FC = () => {
  const [monsters, setMonsters] = useState<[Monster]>([{ id: 0, name: '', email: '' }]);
  const [searchField, setSearchField] = useState('');

  const monstersURL = 'https://jsonplaceholder.typicode.com/users';

  const fetchMonstersFromAPI = (url: string) => {
    return fetch(url).then((response: any) => {
      return response.json().then((users: [Monster]) => {
        setMonsters(users);
      });
    });
  };

  useEffect(() => {
    fetchMonstersFromAPI(monstersURL);
  }, []);

  const handleChange = (e: React.FormEvent<HTMLTextAreaElement>) => {
    setSearchField((e.target as HTMLTextAreaElement).value);
  };

  const filteredMonsters = monsters.filter((monster: Monster) =>
    monster.name.toLowerCase().includes(searchField.toLowerCase()),
  );

  return (
    <div className='App'>
      <h1>Monsters Rolodex</h1>
      <SearchBox placeholder='Search monsters' handleChange={handleChange} />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
