import React from 'react';
import styled from 'styled-components';

const Error = styled.div`
    font-size: 1.4rem;
    color: var(--color-red-700);
    margin-top: 0.5rem;
`;

const CompactFormControl = ({ children, error }) => {
  return (
    <>
        {children}
        {error && <Error>{error}</Error>}
    </>
  )
}

export default CompactFormControl