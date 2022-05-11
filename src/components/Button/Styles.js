import styled, { css } from "styled-components/native";

export const Wrapper = styled.TouchableOpacity`
   padding: 8px;
   justify-content: center;
   align-items: center;
   margin-bottom: 16px;

  ${({ theme, color, size, outlined }) => css`
    ${color === "primary" &&
    css`
      background-color: ${theme.colors.orange};
    `}

    ${color === "white" &&
    css`
      background-color: ${theme.colors.white};
    `}

    ${size === 'small' && css`
      width: 165px;
      height: 48px;     
      border-radius: 6px;
    `}
    ${size === 'medium' && css`
      width: 259px;
      height: 48px;    
      border-radius: 6px;
    `}

    ${outlined && css`
      border: none;
      background-color: transparent;
    `}
  `}
`;
