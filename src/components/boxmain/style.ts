import styled from "styled-components";

export const Image = styled.img`
    border-radius: .5rem;
    width: 100%;
    height: 100%;
`

export const FirstDiv = styled.a<{ imageUrl: string }>`
    background-image: url(${(props) => props.imageUrl});
    background-size: cover;
    background-position: center;
    width: 100%;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem;
    border-radius: .5rem;
    text-decoration: none;

    @media(max-width: 750px){
        height: 25rem;
    }
`

export const Title = styled.h2`
    font-size: 2rem;
    font-weight: bolder;

    @media(max-width: 750px){
        font-size: 1.5rem;
    }
`

export const Newspaper =  styled.p`
    font-weight: bold;

    @media(max-width: 750px){
        font-size: .8rem;
    }
`