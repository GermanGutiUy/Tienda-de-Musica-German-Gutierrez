import CarroCompras from "../img/CarroCompras.png"
import "../styles/CardWidget.css";

const CardWidget = () => {
  return (
    <div className="CardWidgetContainer">
      <div className="CardWidgetImg">
      <img width={200} src={ CarroCompras } alt="" /> {/*// Imagen de carrito */}
      <p className="CardWidgetCounter">10</p> {/* //De momento, numero de carrito fijo */}
      </div>
    </div>
  )
}

export default CardWidget
