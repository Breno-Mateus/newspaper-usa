import {  FirstDiv, Title, Newspaper } from "./style"

import { BoxProps } from "./type"

const BoxMain = ({urlImage, title, newspaper, url} : BoxProps) => {
    return (
        <FirstDiv imageUrl={urlImage} href={url}>
            <Newspaper>{newspaper}</Newspaper>
            <Title>{title}</Title>
        </FirstDiv>
    )
}

export default BoxMain