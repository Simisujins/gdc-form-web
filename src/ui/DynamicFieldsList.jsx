import styled from "styled-components";

export const DynamicFieldsList = styled.div`
  display: flex;
  flex-wrap: no-wrap; /* Ensures items wrap to the next line on smaller screens */
  margin: 1rem 0;
`;

export const DynamicFieldsListItem = styled.div`
  padding: 1rem;
  width: 100%; /* Full width on mobile screens */
  
  /* Adjustments for label class */
  &.label {
    white-space: nowrap;
    padding-top: 2rem;
  }

  @media screen and (min-width: 768px) {
    width: 20%; /* 20% width for larger screens (like tablets and above) */
  }
`;
