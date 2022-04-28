import styled from "styled-components";


const VideoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

const OfSac = () => {
    return (
        <VideoContainer>
            <video controls autoPlay>
                <source src="https://cdn.discordapp.com/attachments/753249225709453363/969353051905339442/Snaptik_7088278441799208198_cacca-rossa.mp4"/>
            </video>
        </VideoContainer>
    )
}

export default OfSac;