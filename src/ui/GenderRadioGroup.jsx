import styled from "styled-components";
import PropTypes from "prop-types";

const StyledGender = styled.div`
    display: grid;
    align-items: center;
    grid-template-columns: 24rem 1fr 1.2fr;
    gap: 2.4rem;
    padding: 1.2rem 0;
    border-bottom: 1px solid var(--color-grey-100);
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

const Span = styled.span`
    font-weight: 500;
`;

export const Error = styled.span`
    font-size: 1.4rem;
    color: var(--color-red-700);
`;

function GenderRadioGroup({ children, error }) {
    return (
        <StyledGender>
            <Span>Gender</Span>
            <StyledRadio>{children}</StyledRadio>
            {error && (
                    <Error>{error}</Error>
                )}
        </StyledGender>
    );
}

export default GenderRadioGroup;

GenderRadioGroup.Label = Label;

GenderRadioGroup.propTypes = {
    children: PropTypes.any,
};
