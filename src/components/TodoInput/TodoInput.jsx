import './TodoInput.scss';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types'

const TodoInput = ({agregarTarea, input, setInput}) => {

    const handleGuardaTarea = (e) => {
        const input = e.target.value;
        setInput(input);
    }

    const handleEnviaTarea = () => {
        const tarea = {
            id: uuidv4(),
            texto: input,
            fecha: new Date(),
            completado: false
        }
        agregarTarea(tarea);
        setInput('');
    }

    return(
        <div className='tarea-registro'>
            <input type="text" className="tarea-input" placeholder="Ingresa una tarea" value={input} onChange={handleGuardaTarea} />
            <button className='tarea-boton' onClick={handleEnviaTarea}>Agregar Tarea</button>
        </div>
    )
}

TodoInput.protoType = {
    envioTarea: PropTypes.object.isRequired
}

export default TodoInput;