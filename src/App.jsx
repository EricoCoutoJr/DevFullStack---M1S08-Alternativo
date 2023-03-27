import './App.css';
import { useState, createContext } from 'react';
import AddTarefas from './models/AddTarefas';
import ListaTarefas from './models/ListaTarefas';

export const AppContext = createContext();

function App() {
  const [tarefas, setTarefas] = useState([]);

  const values = { tarefas, setTarefas };

  return (
    <AppContext.Provider value={values}>
      <div>
        <AddTarefas />
        <ListaTarefas />
      </div>
    </AppContext.Provider>
  );
}

export default App;
