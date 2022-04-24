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


const Card = ({card, handleChoice, flipped}) => {

    const handleClick = () => {
        handleChoice(card);
    }

    return(
        <CardContainer className="card" whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
            <div className={flipped ? "flipped" : ""}>
                <img className="front" src={card.src} alt='card front'/>                
                <img className="back" onClick={handleClick} src="https://i.imgur.com/x7L9qpC.png" alt="card cover"/>
            </div>
        </CardContainer>
    );
}

export default Card;