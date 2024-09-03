import Cabecera from "../../components/Cabecera/Cabecera";
import TodoList from "../../components/TodoList/TodoList";
import './Home.scss'

const Home = () => {
    return(
        <>
            <Cabecera />
            <div className="container-tareas">
                <TodoList />
            </div>
        </>
    )
}

export default Home;