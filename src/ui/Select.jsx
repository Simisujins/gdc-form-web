import styled from "styled-components";

const Select = styled.select`
    appearance: none;
    -webkit-appearance: none;
    width: 100%;
    font-size: 1.4rem;
    border: 1px solid var(--color-grey-300);
    background-color: var(--color-grey-0);
    border-radius: var(--border-radius-sm);
    padding: 0.8rem 1.2rem;
    box-shadow: var(--shadow-sm);
    color: var(--color-grey-900);
    cursor: pointer;
    outline: none;

    &:focus {
        background: var(--color-grey-200);
        border: 1px solid var(--color-grey-700);
        border-radius: var(--border-radius-md);
    }
`;

export default Select;
