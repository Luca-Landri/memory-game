
import styled from "styled-components";

const CardContainer = styled.div`

`;

const Card = ({id, src}) => {
    return(
        <CardContainer className='card' key={id}>
            <div>
              <img className='front' src={src} alt='card front'/>
              <img className='back' src="https://i.imgur.com/0V81Ft7.png" alt="card cover"/>
            </div>
        </CardContainer>
    );
}

export default Card;