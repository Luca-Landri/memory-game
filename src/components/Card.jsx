import "./Card.css";
import styled from "styled-components";
import { motion } from "framer-motion";
import useSound from 'use-sound';
import sacchetti from '../audio/sacchetti.mp3';

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
    transform: ${props => props.flipped.rotate};

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
    transition: all ease-in 0.2s;
    position: absolute;
    transition-delay: 0.4s;
`;

const BackImg = styled.img`
    transition: all ease-in 0.2s;
    transform: ${props => props.flipped.rotate};
    transition-delay: 0s;

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
    transition-delay: 0.2s;


`;


const Card = ({card, handleChoice, flipped}) => {
    const [play] = useSound(sacchetti);


    const handleClick = () => {
        handleChoice(card);
        if (card.src == "https://cdn.discordapp.com/attachments/707531038360076288/830857317464539175/sacchetti.png") {
            play();
        }
    }


    return(
        <CardContainer className="card" whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
            <div className={flipped ? "flipped" : ""}>
                <FrontImg className="front" flipped={{rotate: flipped ? "rotateY(0deg)" : "rotateY(90deg)"}} src={card.src} alt='card front'/>                
                <BackImg className="back" flipped={{rotate: flipped ? "rotateY(90deg)" : "rotateY(0deg)"}} onClick={handleClick} src="https://cdn.discordapp.com/attachments/753249225709453363/968250517862113290/x7L9qpC.png" alt="card cover"/>
            </div>
        </CardContainer>
    );
}

export default Card;