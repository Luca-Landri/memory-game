import "./Card.css";
import styled from "styled-components";
import { motion } from "framer-motion";

const CardContainer = styled(motion.div)`
    position: relative;
    display: flex;
    flex-basis: 15%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px;
    border-radius: 5px;

    img {
        display: block;
        border-radius: 15px;
        border: 4px solid #fff;
    }

    @media (max-width: 600px) {
        flex-basis: 10%;
    }
`;

const FrontImg = styled.img`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;

    @media (min-width: 1400px) {
        width: 200px !important;
        height: 300px !important;
        object-fit: cover;
    }

    @media (min-width: 1200px) {
        width: 150px;
        height: 225px;
        object-fit: cover;
    }

    @media (max-width: 1200px) {
        width: 100px;
        height: 150px;
        object-fit: cover;
    }

    @media (max-width: 600px) {
       width: 75px;
       height: 100px;
       object-fit: cover;
    }

`;

const BackImg = styled.img`

    @media (min-width: 1400px) {
        width: 200px !important;
        height: 300px !important;
    }

    @media (min-width: 1200px) {
        width: 150px;
        height: 225px;
    }

    @media (max-width: 1200px) {
        width: 100px;
        height: 150px;
    }

    @media (max-width: 600px) {
       width: 75px;
       height: 100px;
    }


`;


const Card = ({card, handleChoice, flipped}) => {

    const handleClick = () => {
        handleChoice(card);
    }

    return(
        <CardContainer className="card" whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
            <div className={flipped ? "flipped" : ""}>
                <FrontImg className="front" src={card.src} alt='card front'/>                
                <BackImg className="back" onClick={handleClick} src="https://i.imgur.com/x7L9qpC.png" alt="card cover"/>
            </div>
        </CardContainer>
    );
}

export default Card;