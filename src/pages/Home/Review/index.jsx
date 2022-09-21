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
            descricao={`Bom demais. Sensacional. Espetacular. Realmente cumpre o que promete. Decoração de extrema elegância. Sua comida é muito boa e tem uma ótima apresentação, os pratos não demoraram a chegar em minha mesa e a gerência é excelente.`}
          />
          <CardReview
            foto={"./images/reviews/gabriel.jpg"}
            nomeCliente={"Gabriel"}
            cargo={"Criador do Code Wars"}
            descricao={`Em toda a minha vida nunca tive uma sensação como essa. Cada garfada no prato era como se eu tivesse ido para o céu e logo em seguida voltado à Terra naquela linda vista. Parabéns, esse foi o melhor dia da minha vida após comer nesse restaurante DIVINO! Recomendo, nota 1000 👍!!!`}
          />
          <CardReview
            foto={"./images/reviews/gustavo.png"}
            nomeCliente={"Gystavo"}
            cargo={"Fã"}
            descricao={`Em um mundo coberto pelas trevas, vaguei sem nenhuma esperança até me deparar com o +55Bistrô! O último Éden na Terra, o lugar mais rico em vida que já vi. O MAIOR e MELHOR restaurante da nossa esquina! Simplesmente o lugar que eu desejava: um lugar para comer em paz.`}
          />
          <CardReview
          foto={"./images/reviews/bruno.png"}
          nomeCliente={'Bruno Silveira'}
          cargo={'Cliente fiel'}
          descricao={'A comida do restaurante é deveras maravilhosa. Se eu não fosse casado, com toda certeza pediria o chef em casamento, pois deve ser uma pessoa maravilhosa. Toda a equipe lançou a braba no atendimento.'}
          />
        </ElasticCarousel>
      </div>
    </StyledSection>
  );
};

export default Review;
