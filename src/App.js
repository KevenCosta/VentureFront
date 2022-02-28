import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div classname="banner">
        <div className='venture-title'>
          Venture
        </div>
        <div className='class-title'>
          Class
        </div>
      </div>
      <div className='content'>
        <div className='content-text'>
          <h2>Educação que</h2>
          <h2 id='content-secondary'>transforma</h2>
          <p>Alunos de todo o mundo estão iniciando novas carreiras e avançando em suas áreas.</p>
          <div>
            
            
              <button className='button-training'>Iniciar treinamento</button>
          
          </div>
        </div>
        <div className='content-img'>
          <img src={require('./img/cao1.png')} alt="img_dog" />
        </div>
      </div>
    </div>
  );
}

export default App;
