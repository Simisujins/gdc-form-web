import styled from "styled-components";

import { FaFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";

const StyledContact = styled.div`
    align-self: center;
    display: flex;
    gap: 2rem;
    color: var(--color-brand-900);
    font-size: 3.5rem;
`;

function SocialContact() {
    return (
        <StyledContact>
            <FaFacebook />
            <FaSquareInstagram />
        </StyledContact>
    );
}

export default SocialContact;
