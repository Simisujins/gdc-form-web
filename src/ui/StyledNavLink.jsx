import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

const variations = {
    navbar: css`
        &:link,
        &:visited {
            display: flex;
            align-items: center;
            gap: 1.2rem;

            color: var(--color-grey-600);
            font-size: 1.6rem;
            font-weight: 500;
            padding: 1.2rem 2.4rem;
            transition: all 0.3s;
        }
        /* This works because react-router places the active class on the active NavLink */
        &:hover,
        &:active,
        &.active:link,
        &.active:visited {
            color: var(--color-brand-500);
            background-color: var(--color-grey-50);
            border-radius: var(--border-radius-sm);
        }

        & svg {
            width: 2.4rem;
            height: 2.4rem;
            color: var(--color-grey-400);
            transition: all 0.3s;
        }

        &:hover svg,
        &:active svg,
        &.active:link svg,
        &.active:visited svg {
            color: var(--color-brand-600);
        }
    `,
    main: css`
        &:link,
        &:visited {
            color: var(--color-brand-50);
            background-color: var(--color-brand-600);
            font-size: 1.4rem;
            padding: 1.2rem 1.6rem;
            font-weight: 500;
            text-align: center;
        }

        &:hover,
        &:active,
        &.active:link,
        &.active:visited {
            content: "&#8594";
            background-color: var(--color-brand-700);
        }
    `,
};

const StyledNavLink = styled(NavLink)`
    ${({ variation = "navbar" }) => variations[variation]}
`;

export default StyledNavLink;
