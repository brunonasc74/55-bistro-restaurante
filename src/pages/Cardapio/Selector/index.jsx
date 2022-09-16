import { StyledSelector } from "./style";
import { MdFoodBank } from "react-icons/md";
import { BiFoodMenu } from "react-icons/bi";
import { MdOutlineEmojiFoodBeverage } from "react-icons/md";
import { MdOutlineFoodBank } from "react-icons/md";
import { IoFastFood } from "react-icons/io5";

const Selector = () => {

    return (
        <StyledSelector>
            <div className="selector">
                <div className="selector-item">
                <BiFoodMenu  />
                    <span>Menu</span>
                </div>
            </div>

            <div className="selector">
                <div className="selector-item">
                <MdFoodBank />
                    <span>Entradas</span>
                </div>
            </div>

            <div className="selector">
                <div className="selector-item">
                <MdOutlineFoodBank />
                    <span>Pratos principais</span>
                </div>
            </div>

            <div className="selector">
                <div className="selector-item">
                <IoFastFood />
                    <span>Sobremesas</span>
                </div>
            </div>

            <div className="selector">
                <div className="selector-item">
                <MdOutlineEmojiFoodBeverage />
                    <span>Bebidas</span>
                </div>
            </div>

        </StyledSelector>
    )

}

export default Selector;