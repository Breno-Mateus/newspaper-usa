import styled from "styled-components";

export const FooterStyle = styled.footer`
    background: linear-gradient(to right, rgb(55, 65, 81), rgb(17, 24, 39), rgb(0, 0, 0));
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    margin-top: 2rem;

    @media(max-width: 750px) {
        font-size: .8rem;
    }    
`