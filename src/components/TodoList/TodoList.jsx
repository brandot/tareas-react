import { useEffect, useState } from "react";
import TodoInput from "../../components/TodoInput/TodoInput";
import Tarea from "../Tarea/Tarea";
import './TodoList.scss';

const TodoList = () => {
    const [tareas, setTareas] = useState([]);
    const [input, setInput] = useState('');

    const persistenciaDatos = (nuevaLista) => {
        localStorage.setItem('tareas', JSON.stringify({tareas: nuevaLista}));
    }

    const agregarTarea = (tarea) => {
        if (tarea.texto.trim()) {
            console.log(tarea)
            tarea.texto = tarea.texto.trim();
            const listaTareas = [tarea,...tareas];
            persistenciaDatos(listaTareas);
            setTareas(listaTareas);
        }
    }

    const editarTarea = (id) => {
        console.log(id);
        const datoTarea = tareas.filter(it => it.id == id);
        if (datoTarea.length > 0) {
            setInput(datoTarea[0].texto);
            eliminarTarea(id);
        }
    }

    const eliminarTarea = (id) => {
        const nuevaLista = tareas.filter(it => it.id != id);
        persistenciaDatos(nuevaLista);
        setTareas(nuevaLista);
    }

    const completarTarea = (id) => {
        const nuevaLista = tareas.map(tarea => {
            if(tarea.id === id){
                tarea.completado = !tarea.completado;
            }
            return tarea;
        });
        persistenciaDatos(nuevaLista);
        setTareas(nuevaLista);
    }

    useEffect(() => {
        if (!localStorage) {
            return;
        }

        let localTareas = localStorage.getItem('tareas')
        if (!localTareas) {
            return;
        }

        localTareas = JSON.parse(localTareas).tareas;
        setTareas(localTareas);

    }, [])

    return(
        <>
            <TodoInput input={input} setInput={setInput} agregarTarea={agregarTarea}/>
            <div className="lista-tareas">
                {tareas?.length ? tareas.map(tarea => {
                    return(
                        <Tarea key={tarea.id} datoTarea={tarea} eliminarTarea={eliminarTarea} editarTarea={editarTarea}
                        completarTarea={completarTarea}/>
                    )
                }): null}
            </div>
        </>
    )
}

export default TodoList;