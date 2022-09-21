import { StyledPreloader } from "./style";

const Preloader = () => {
    window.addEventListener("load", function(){
        const loader = document.querySelector(".preloader");
        loader.style.display = "none";
    })
    return (
  <StyledPreloader>
    <div className="preloader"></div>
  </StyledPreloader>);
};

export default Preloader;