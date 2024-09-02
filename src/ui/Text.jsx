import styled, { css } from "styled-components";

const sizes = {
    small: css`
        font-size: 1.6rem;
        font-weight: 200;
    `,
    large: css`
        opacity: 0.9;
        font-size: 2rem;
        font-weight: 300;
        padding: 1rem 0;
        max-width: 70%;
        text-align: center;
        margin: auto;
        color: var(--color-grey-0);
    `,
};

const Text = styled.p`
    ${({ size = "large" }) => sizes[size]}
`;

export default Text;
