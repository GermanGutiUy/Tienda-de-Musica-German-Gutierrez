import { GiShoppingCart } from "react-icons/gi"; //Importo el carrito de reac icons
import "../styles/CardWidget.css";

const CardWidget = () => {
  return (
    <div className="CardWidgetContainer">
      <div className="CardWidgetImg">
      <div>
        <GiShoppingCart size={70}/>
      </div>
      <p className="CardWidgetCounter">10</p> {/* //De momento, numero de carrito fijo */}
      </div>
    </div>
  )
}

export default CardWidget
