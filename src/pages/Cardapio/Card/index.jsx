import { StyledCard } from "./style";
import { useState, useEffect } from "react";

const Card = ({ categoria, all }) => {
  const [food, setFood] = useState([]);
  const url = "https://restaurante-api-resilia.herokuapp.com/cardapios";

  const getApi = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setFood(data);
    console.log(data);
  };

  useEffect(() => {
    getApi();
  }, []);

  return (
    <StyledCard>
      <section className="cards">
        {food.map((item) => {
          if (item.categoria === categoria || all) {
            return (
              <div className="card">
                <div className="card-image">
                  <img src={item.imagem} alt={item.nome} />
                </div>
                <div className="card-content">
                  <div className="card-desc">
                    <div className="card-np">
                      <p className="card-name">{item.nome}</p>
                      <p className="card-price">R${item.preco}</p>
                    </div>
                  </div>
                  <p className="card-desc">{item.descricao}</p>
                </div>
              </div>
            );
          }
        })}
      </section>
    </StyledCard>
  );
};

export default Card;
