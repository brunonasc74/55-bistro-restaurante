import Container from "../../../components/styles/Container";
import ElasticCarousel from "react-elastic-carousel";
import { StyledSection } from "./style";
import Title from "../../../components/Title";
import CardReview from "../CardReview";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 850, itemsToShow: 2, itemsToScroll: 2 },
  { width: 1150, itemsToShow: 3, itemsToScroll: 2 },
];

const Review = () => {
  return (
    <StyledSection>
      <Container>
        <Title
          preTitle={"Depoimentos"}
          mainTitle={"O que nossos clientes dizem"}
        />
      </Container>
      <div className="container">
        <ElasticCarousel
          breakPoints={breakPoints}
          showArrows={false}
          itemPadding={[0, 10]}
          easing={"cubic-bezier(0, 0.55, 0.45, 1)"}
        >
          <CardReview
            foto={"./images/reviews/maguinho.png"}
            nomeCliente={"Magnus"}
            cargo={"Mestre das artes de TI"}
            descricao={`Achei a comida muito poggers. Não teve aquela demora que acho omegalul total, e a comida veio do jeito que eu pedi, se não eu iria achar meio noggers. Tava tudo bem temperado, já tomei uma micro diff, nota final: restaurante muito based.`}
          />
          <CardReview
            foto={"./images/reviews/brenno.png"}
            nomeCliente={"Brenno"}
            cargo={"Irmão caçula da sócia"}
            descricao={`Bom demais. Sensacional. Espetacular. Comida genial. Minha opinião não tem nada a ver com o fato de eu ter sido ameaçado. Foram só 3 vezes.`}
          />
          <CardReview
            foto={"./images/reviews/gabriel.jpg"}
            nomeCliente={"Gabriel"}
            cargo={"Criador do Code Wars"}
            descricao={`Achei a comida muito poggers. Não teve aquela demora que acho omegalul total, e a comida veio do jeito que eu pedi, se não eu iria achar meio noggers. Tava tudo bem temperado, já tomei uma micro diff, nota final: restaurante muito based.`}
          />
          <CardReview
            foto={"./images/reviews/gustavo.png"}
            nomeCliente={"Gystavo"}
            cargo={"Fã"}
            descricao={`Em um mundo coberto pelas trevas, vaguei sem nenhuma esperança na terra. Até me deparar com o restaurante +55Bistrô, o último Éden na terra, o lugar mais rico em vida que eu poderia imaginar. O MAIOR e MELHOR restaurante da nossa esquina! Sem comparação, não há algum defeito. Simplesmente o lugar que eu desejava: um lugar para comer em paz.`}
          />
          <CardReview />
        </ElasticCarousel>
      </div>
    </StyledSection>
  );
};

export default Review;
