import styled from "styled-components";

const StyledSelectDiv = styled.div`
    position: relative;
    &::after {
        content: "";
        position: absolute;
        pointer-events: none;
        top: 50%;
        right: 10px;
        transform: translate(0, -50%);
        width: 1.2rem;
        height: 1.2rem;
        background-color: var(--color-grey-900);
        clip-path: polygon(50% 80%, 0 20%, 100% 20%);
    }
`;

export default StyledSelectDiv;
