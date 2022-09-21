import styled from "styled-components";

export const StyledPreloader = styled.div`
    .preloader {
        background: #0D0D14 url(public/images/preloader.gif) no-repeat center center;
        background-size: 15%;
        height: 100vh;
        width: 100%;
        position: fixed;
        z-index: 100;
    }
`
export default StyledPreloader;