//import './App.css';

function App() {

  /*let estilosImagen = {
    border: '1px solid black',
    width: 100,
    backgroundColor: 'red',
  }*/

  return (
    //JSX border : '1px solid black', width: '100px' es lo mismo que lo de estilosImagen
    <div className="App">
      <header className="main-header">
        <div className="container-logo">
        <img src="logo192.png" style class="img-header"/>
        </div>
        <ul className='navbar'>
          <li><button>Home</button></li>
          <li><button>Productos</button></li>
          <li><button>Nosotros</button></li>
          <li><button>Contacto</button></li>
        </ul>
      </header>
    </div>
  );
}

export default App;
