import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.scss';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className='aplicacion-todo'>
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                </Routes>
            </div>
        </Router>
    </div>
  )
}

export default App
