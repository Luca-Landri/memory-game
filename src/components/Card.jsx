
import styled from "styled-components";

const CardContainer = styled.div`

`;

const FrontImg = styled.img`
    width: 300px;
`;

const BackImg = styled.img`
    width: 300px;
`;

const Card = ({src, handleChoice}) => {

    const handleClick = () => {
        handleChoice(src);
    }


    return(
        <CardContainer>
            <div>
              <FrontImg src={src} alt='card front'/>
              <BackImg onClick={handleClick} src="https://i.imgur.com/0V81Ft7.png" alt="card cover"/>
            </div>
        </CardContainer>
    );
}

export default Card;