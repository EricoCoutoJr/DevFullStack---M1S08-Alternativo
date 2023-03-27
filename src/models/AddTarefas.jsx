import { useState, useContext } from 'react';
import { AppContext } from '../App';

function AddTarefas() {
  const [tarefa, setTarefa] = useState('');
  const [efetuada, setEfetuada] = useState(false);
  const [id, setId] = useState('');

  const { tarefas, setTarefas } = useContext(AppContext);

  function validarCampos() {
    if (tarefa) {
      return true;
    } else {
      // Neste alert ele irá adicionar a mensagem abaixo
      alert('Para adicionar necessário informar a tarefa');
      return false;
    }
  }

  function addTarefa(tarefa) {
    tarefa.id = tarefas.length + 1;
    setTarefas([...tarefas, tarefa]);
  }

  function handleAddTarefa(event) {
    event.preventDefault();
    if (validarCampos()) {
      const job = {
        id: id,
        tarefa: tarefa,
        efetuada: efetuada,
      };
      addTarefa(job);
      setTarefa('');
    }
  }

  return (
    <form>
      <div className="row mb-4 text-center">
        <h3 className="p-3 bg-secondary text-white">Inserir Tarefas</h3>
        <div className="col-10">
          <input
            className="form-control"
            placeholder="Inserir tarefa aqui..."
            aria-label="Inserir Tarefa"
            type="text"
            value={tarefa}
            onChange={evento => setTarefa(evento.target.value)}
          />
        </div>
        <div className="col-2">
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleAddTarefa}
          >
            Adicionar
          </button>
        </div>
      </div>
    </form>
  );
}

export default AddTarefas;
