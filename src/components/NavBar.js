import Button from '@mui/material/Button';

function NavBar () {
    return(
        <header className="main-header">
            <div className="container-logo">
            <img src={require('./Multimedia/logo1.png')} className="img-header"/>
            </div>
            <ul className='navbar'>
                <li><Button variant="contained">Home</Button></li>
                <li><Button variant="contained">Productos</Button></li>
                <li><Button variant="contained">Nosotros</Button></li>
                <li><Button variant="contained">Contacto</Button></li>
            </ul>
      </header>
    )
}

export default NavBar