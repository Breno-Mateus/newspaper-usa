import styled from "styled-components";

export const HeaderStyle = styled.header`
    height: 4rem;
    width: 100%;
    color: #fff;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 1rem;
    position: fixed;
    top: 0;

    background: linear-gradient(to right, rgb(55, 65, 81), rgb(17, 24, 39), rgb(0, 0, 0));
`

export const Text = styled.p`
    font-size: 1.5rem;
    font-weight: 800;
    text-align: center;

    @media(max-width: 750px){
        font-size: .8rem;
    }
`

export const InputStyle = styled.input`
    background: rgb(65, 75, 91);
    border: none;
    border-radius: .2rem;
    color: #fff;
    padding: .2rem;

    &::placeholder{
        color: #fff;
    }

    @media(max-width: 750px){
        width: 7rem;
    }
`

export const DivSearch = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;
`