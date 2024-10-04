import { DivCard, Image, Title, Description, Link, DivText, DivNewspaper } from "./style"
import { ICardNews } from "./type"


const CardNews = ({url, description, title, urlImage, newspaper} : ICardNews) => {
    return(
        <DivCard>
            <Image src={urlImage}/>

            <DivText>
                <DivNewspaper>{newspaper}</DivNewspaper>

                <Title>{title}</Title>
                <Description>{description}</Description>

                <Link href={url} target="_blank" rel="noopener noreferrer">Read more</Link>
            </DivText>
        </DivCard>
    )
}

export default CardNews