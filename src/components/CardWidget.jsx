import CarroCompras from "../img/CarroCompras.png"

const CardWidget = () => {
  return (
    <div>
      <img width={200} src={ CarroCompras } alt="" /> {/*// Imagen de carrito */}
      <p>10</p> {/* //De momento, numero de carrito fijo */}
    </div>
  )
}

export default CardWidget
