import styled from "styled-components";
import PropTypes from "prop-types";

export const StyledSubForm = styled.div`
    display: grid;
    align-items: center;
    grid-template-columns: 24rem 1fr 1.2fr;
    gap: 2.4rem;
    padding: 1.2rem 0;

    &:has(button) {
        display: flex;
        justify-content: flex-end;
        gap: 1.2rem;
    }
`;

const Label = styled.label`
    font-weight: 500;
`;

const Error = styled.span`
    font-size: 1.4rem;
    color: var(--color-red-700);
`;

function SubForm({ label, error, children }) {
    return (
        <StyledSubForm>
            {label && <Label htmlFor={children.props?.id}>{label}</Label>}
            {children}
            {error && <Error>{error}</Error>}
        </StyledSubForm>
    );
}

export default SubForm;

SubForm.propTypes = {
    label: PropTypes.string,
    error: PropTypes.string,
    children: PropTypes.any,
};
