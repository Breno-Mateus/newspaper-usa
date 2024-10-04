import styled from "styled-components";

export const Divmain = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 8rem;
    gap: 8rem;
`
export const DivNews = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
`

export const DivNewsFirst = styled.div`
    display: flex;
    gap: 1rem;
    width: 80%;
    height: 25rem;

    @media(max-width: 750px){
        flex-direction: column;
    }
`