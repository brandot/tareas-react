import './Tarea.scss';
import moment from"moment";

const Tarea = ({datoTarea, eliminarTarea, editarTarea, completarTarea}) => {
    return(
        <div className={datoTarea.completado ? 'tarea-contenedor completada' : 'tarea-contenedor'}>
            <div className='tarea-nombre'>
                <input type='checkbox' onChange={() => completarTarea(datoTarea.id)} />
                <div className='tarea-texto'>
                    <span>{datoTarea.texto}</span>
                    <span className='tarea-fecha'>{moment(datoTarea.fecha).format('DD/MM/yyyy HH:mm')}</span>
                </div>
            </div>
            <div className='tarea-iconos'>
                <button className='tarea-icono' onClick={() => editarTarea(datoTarea.id)}>
                    <i className="fa-solid fa-pen-to-square"></i>
                </button>
                <button className='tarea-icono' onClick={() => eliminarTarea(datoTarea.id)}>
                    <i className="fa-solid fa-trash-can"></i>
                </button>
            </div>
        </div>
    )
}

export default Tarea;