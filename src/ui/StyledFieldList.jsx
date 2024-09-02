import styled from "styled-components";

export const StyledFieldList = styled.li`
    list-style-type: none;
    &:not(:first-child) {
        border-bottom: 1px solid var(--color-grey-100);
    }
`;
