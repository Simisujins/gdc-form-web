import styled from "styled-components";
import PropTypes from "prop-types";

const StyledGender = styled.div`
    display: grid;
    align-items: center;
    grid-template-columns: 24rem 1fr 1.2fr;
    gap: 2.4rem;
    padding: 1rem 0;
`;

const StyledRadio = styled.div`
    display: flex;
    gap: 1rem;
    input[type="radio"] {
        accent-color: var(--color-brand-600);
    }
`;

export const Label = styled.label`
    font-weight: 500;
`;


function GenderRadioGroupCompact({ children }) {
    return (
        <StyledGender>
            <StyledRadio>{children}</StyledRadio>
        </StyledGender>
    );
}

export default GenderRadioGroupCompact;
GenderRadioGroupCompact.Label = Label;
GenderRadioGroupCompact.propTypes = {
    children: PropTypes.any,
};
