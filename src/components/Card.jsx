
import styled from "styled-components";

const CardContainer = styled.div`
    display: flex;
    flex-basis: 15%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px;
    border-radius: 5px;
    transition: all 0.3s ease-in-out;

`;

const FrontImg = styled.img`
    width: 200px;
`;

const BackImg = styled.img`
    width: 200px;
`;

const Card = ({src, handleChoice, flipped}) => {

    const handleClick = () => {
        handleChoice(src);
    }


    return(
        <CardContainer>
            <div>
                {
                flipped ? 
                <FrontImg src={src} alt='card front'/>                
                : 
                <BackImg onClick={handleClick} src="https://i.imgur.com/0V81Ft7.png" alt="card cover"/>
                }
            </div>
        </CardContainer>
    );
}

export default Card;