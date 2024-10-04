import styled from "styled-components";


export const DivCard = styled.div`
    background: linear-gradient(90deg, rgba(245,245,245,1) 0%, rgba(233,234,237,1) 51%);

    display: flex;
    gap: 1rem;
    
    width: 80%;
    border: 1px solid #515151;
    border-radius: 5px;
`

export const DivText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: .5rem .5rem .5rem 0;
    gap: 1rem;
    overflow: hidden;

    @media(max-width: 770px){
        gap: .2rem;
        padding: .2rem .2rem .2rem 0;
    }
`

export const Image = styled.img`
    width: 50%;
`

export const Title = styled.h3`
    font-weight: 1000;
    margin-left: .5rem;

    @media(max-width: 770px){
        font-size: .8rem;
    }

    @media(max-width: 500px){
        font-size: .6rem;
    }
`

export const Description = styled.p`
    margin-left: .5rem;

    @media(max-width: 770px){
        font-size: .6rem;
    }

    @media(max-width: 500px){
        font-size: .55rem;
    }
`

export const Link = styled.a`
    border: 1px solid black;
    border-radius: .2rem;

    width: 6.5rem;
    height: 1.5rem;

    display: flex;
    align-items: center;
    justify-content: center;

    margin: 0 0 .5rem .5rem;

    background: linear-gradient(to right, rgb(55, 65, 81), rgb(17, 24, 39), rgb(0, 0, 0));
    color: #fff;

    text-decoration: none;
    cursor: pointer;

    &:hover{
        opacity: 0.8;
    }

    @media(max-width: 770px){
        width: 3.5rem;
        font-size: .5rem;
        height: 1rem;
    }
`

export const DivNewspaper = styled.div`
    color: #000;

    display: flex;
    align-items: center;
    
    margin-left: .5rem;
    font-size: .7rem;

    @media(max-width: 770px){
        font-size: .5rem;
    }
`