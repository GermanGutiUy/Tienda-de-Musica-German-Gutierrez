import { GiShoppingCart } from "react-icons/gi"; //Importo el carrito de reac icons
import './CardWidget.css';
import { CartContext } from "../../context/CartContex";
import { useContext } from "react";
import { Link } from "react-router-dom";

const CardWidget = () => {

  const {cantidadTotal} = useContext(CartContext)

  return (
    <Link to="/carrito" className="CardWidgetContainer">
      <div className="CardWidgetImg">
        <GiShoppingCart size={70}/>
      </div>
      <p className="CardWidgetCounter">{cantidadTotal()}</p> {/* //De momento, numero de carrito fijo */}
    </Link>
  )
}

export default CardWidget
