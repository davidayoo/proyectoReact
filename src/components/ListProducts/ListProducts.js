import Card from '../Card/Card'

const ListProducts = ({children}) => {

    return(
        <div className="container-cards">
            <h2> {children} </h2>

            <Card title='GeForce GTX 1660 6GB MSI' marca='NVIDIA' price={130000}/>
            <Card title='RX 570 4GB Asrock' marca='AMD' price={110000}/>
            <Card title='RX 6700XT 12GB XFX' marca='AMD' price={195000}/>
            <Card title='GeForce RTX2060 Super 8GB MSI' marca='NVIDIA' price={195000}/>
        </div>
    ) 
}

export default ListProducts;