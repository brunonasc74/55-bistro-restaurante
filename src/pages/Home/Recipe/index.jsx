import Title from "../../../components/Title";
import { StyledRecipe } from "./style";
import ElasticCarousel from "react-elastic-carousel";
import CardRecipe from "../CardRecipe";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 850, itemsToShow: 2, itemsToScroll: 2 },
  {
    width: 1150,
    itemsToShow: 3,
    itemsToScroll: 2,
    pagination: false,
    enableSwipe: false,
  },
];

const Recipe = () => {
  return (
    <StyledRecipe>
      <Title preTitle={"Nossas receitas"} mainTitle={"Recomendação do chef"} />
      <div className="container">
        <ElasticCarousel
          breakPoints={breakPoints}
          showArrows={false}
          itemPadding={[0, 10]}
          easing={"cubic-bezier(0, 0.55, 0.45, 1)"}
        >
          <CardRecipe
            imagem="./images/recipes/lasanha.png"
            titulo="Lasanha à bolonhesa"
            descricao='A receita de lasanha de carne moída, também conhecida como lasanha à bolonhesa, é um clássico! Aliás, você sabia que a lasanha é um prato superfamoso no mundo inteiro? Ela pode ter vários molhos e recheios. Seu nome deriva da sua montagem em camadas: lasanha significa "pote de cozinhar". Confira!'
            tempo="50 min"
          />
          <CardRecipe
            imagem="./images/recipes/mousse.jpg"
            titulo="Mousse de limão"
            descricao="O mousse de limão é uma receita prática, fácil de fazer e refrescante, sendo perfeita para dias quentes. Como esta é uma receita de mousse de limão simples, você pode incrementá-la de diversas formas: adicionando pedacinhos de chocolate branco ou meio amargo, nozes, amêndoas, pistache, biscoito triturado ou o que quiser!"
            tempo="10 min"
          />
          <CardRecipe
            imagem="./images/recipes/tabule.png"
            titulo="Tabule"
            descricao="Agora que você já sabe como fazer tabule tradicional, que tal aprender mais receitas? A culinária do Oriente Médio, com seus sabores exóticos e combinações surpreendentes, que vão muito além da receita de tabule, tem muitos fãs mundo afora. Se você também adora os pratos típicos dessa região, vai adorar a lista com 6 receitas do Oriente Médio incríveis!"
            tempo="40 min"
          />
        </ElasticCarousel>
      </div>
    </StyledRecipe>
  );
};

export default Recipe;
