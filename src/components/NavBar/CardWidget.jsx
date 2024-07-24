import { GiShoppingCart } from "react-icons/gi"; //Importo el carrito de reac icons
import { useContext } from "react";
import { Link } from "react-router-dom";

import { CartContext } from "../../context/CartContext";

import './CardWidget.css';

const CardWidget = () => {

  const { cantidadTotal } = useContext(CartContext)

  let cantidad = cantidadTotal()

  return (
    <Link to="/carrito" className="CardWidgetContainer">
      <div className="CardWidgetImg">
        <GiShoppingCart size={70} />
      </div>
      <p className="CardWidgetCounter">{cantidad > 0 && cantidad}</p> {/* //De momento, numero de carrito fijo */}
    </Link>
  )
}

export default CardWidget
