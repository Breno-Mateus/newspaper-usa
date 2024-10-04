import { HeaderStyle, Text, DivSearch, InputStyle } from "./style"
import { FaSearch } from "react-icons/fa";


const Header = () => {
    return(
        <HeaderStyle>
            <Text>Newspaper USA</Text>
            <DivSearch>
                <FaSearch />
                <InputStyle type="text" placeholder="Buscar"/>
            </DivSearch>
        </HeaderStyle>
    )
}

export default Header