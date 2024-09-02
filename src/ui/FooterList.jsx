import styled from "styled-components";
import Heading from "./Heading";
import Text from "./Text";
import PropTypes from "prop-types";

const StyledFooterList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
`;

function FooterList({ title, listElements }) {
    return (
        <StyledFooterList>
            <Heading as='h4'>{title}</Heading>
            {listElements.map((text, index) => (
                <Text size='small' key={index}>
                    {text}
                </Text>
            ))}
        </StyledFooterList>
    );
}

export default FooterList;

FooterList.propTypes = {
    title: PropTypes.string,
    listElements: PropTypes.array,
};
