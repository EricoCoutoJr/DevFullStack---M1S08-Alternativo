import { useState, useContext } from 'react';
import { AppContext } from '../App';

function ListaTarefas() {
  const { tarefas, setTarefas } = useContext(AppContext);
  const [id, setId] = useState(0);

  function dropTarefa(id) {
    if (id > 0) {
      const index = tarefas.findIndex(tarefa => tarefa.id == id);
      tarefas.splice(index, 1);
      tarefas.map((tarefa, index) => {
        tarefa.id = index + 1;
      });
    }
  }

  function handleDelTarefa(event) {
    event.preventDefault();
    if (confirm('Deseja excluir a tarefa ?')) {
      dropTarefa(id);
      setId(0);
    }
  }

  function statusTarefa(id) {
    const index = tarefas.findIndex(tarefa => tarefa.id == id);
    if (tarefas[index].efetuada) {
      tarefas[index].efetuada = false;
    } else {
      tarefas[index].efetuada = true;
    }
  }

  function handleFinalizarTarefa(event) {
    event.preventDefault();
    statusTarefa(id);
    setId(0);
  }

  return (
    <div className="my-5">
      <table className="table table-hover table-bordered">
        <thead className="table-dark">
          <tr>
            <th className="col-1">ID</th>
            <th className="col-9">Tarefa</th>
            <th className="col-1">Finalizada</th>
            <th className="col-1">Ação</th>
          </tr>
        </thead>

        <tbody>
          {tarefas.map((tarefa, index) => (
            <tr key={tarefa.id}>
              <td className="">{tarefa.id}</td>
              <td className="">{tarefa.tarefa}</td>
              <td className="">
                <button
                  type="button"
                  className={
                    tarefa.efetuada
                      ? 'btn btn-success mx-1'
                      : 'btn btn-secondary mx-1'
                  }
                  onMouseEnter={() => setId(tarefa.id)}
                  onClick={e => handleFinalizarTarefa(e)}
                >
                  {tarefa.efetuada == false ? 'Não' : 'Sim'}
                </button>
              </td>
              <td className="">
                <div className="form-checkjustify-content-center">
                  <button
                    type="button"
                    className="btn btn-danger mx-1"
                    onMouseEnter={() => setId(tarefa.id)}
                    onClick={e => handleDelTarefa(e)}
                  >
                    Del
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListaTarefas;
