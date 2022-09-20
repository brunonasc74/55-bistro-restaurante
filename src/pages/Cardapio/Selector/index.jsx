import { StyledSelector } from "./style";
import { MdFoodBank } from "react-icons/md";
import { BiFoodMenu } from "react-icons/bi";
import { MdOutlineEmojiFoodBeverage } from "react-icons/md";
import { MdOutlineFoodBank } from "react-icons/md";
import { GiWrappedSweet } from "react-icons/gi";
import { Link, Outlet } from "react-router-dom";

const Selector = () => {
  // const [categoria, setCategoria] = useState("");
  // onClick={setCategoria('all')}
  return (
    <StyledSelector>
      <Link to="menu" className="selector">
        <div className="selector-item">
          <i>
            <BiFoodMenu />
          </i>
          <span>Menu</span>
        </div>
      </Link>

      <Link to="regioes" className="selector">
        <div className="selector-item">
          <i>
            <MdFoodBank />
          </i>
          <span>Entradas</span>
        </div>
      </Link>

      <Link to="principais" className="selector">
        <div className="selector-item">
          <i>
            <MdOutlineFoodBank />
          </i>
          <span>Pratos principais</span>
        </div>
      </Link>
      <Link to="sobremesas" className="selector">
        <div className="selector-item">
          <i>
            <GiWrappedSweet />
          </i>
          <span>Sobremesas</span>
        </div>
      </Link>

      <Link to="bebidas" className="selector">
        <div className="selector-item">
          <i>
            <MdOutlineEmojiFoodBeverage />
          </i>
          <span>Bebidas</span>
        </div>
      </Link>
      <Outlet />
    </StyledSelector >
  );
};

export default Selector;
