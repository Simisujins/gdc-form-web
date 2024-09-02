import styled from "styled-components";

const Img = styled.img`
    height: 9.6rem;
    width: auto;
`;

function Logo() {
    return <Img src='/logo.png' alt='Logo' />;
}

export default Logo;
