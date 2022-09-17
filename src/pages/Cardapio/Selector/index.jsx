import { StyledSelector } from "./style";
import { MdFoodBank } from "react-icons/md";
import { BiFoodMenu } from "react-icons/bi";
import { MdOutlineEmojiFoodBeverage } from "react-icons/md";
import { MdOutlineFoodBank } from "react-icons/md";
import { IoFastFood } from "react-icons/io5";

const Selector = () => {
  return (
    <StyledSelector>
      <a href="#" className="selector">
        <div className="selector-item">
          <i>
            <BiFoodMenu />
          </i>
          <span>Menu</span>
        </div>
      </a>

      <a href="#" className="selector">
        <div className="selector-item">
          <i>
            <MdFoodBank />
          </i>
          <span>Entradas</span>
        </div>
      </a>

      <a href="#" className="selector">
        <div className="selector-item">
          <i>
            <MdOutlineFoodBank />
          </i>
          <span>Pratos principais</span>
        </div>
      </a>

      <a href="#" className="selector">
        <div className="selector-item">
          <i>
            <IoFastFood />
          </i>
          <span>Sobremesas</span>
        </div>
      </a>

      <a href="#" className="selector">
        <div className="selector-item">
          <i>
            <MdOutlineEmojiFoodBeverage />
          </i>
          <span>Bebidas</span>
        </div>
      </a>
    </StyledSelector>
  );
};

export default Selector;
