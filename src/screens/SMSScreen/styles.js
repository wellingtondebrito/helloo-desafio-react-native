import styled, { css } from "styled-components/native";

export const Wrapper = styled.View`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.white};
  `}
`;

export const Container = styled.View`
    width: 90%;
    margin: 0 auto;
    padding-top: 8px;
    padding-bottom: 8px;
`;