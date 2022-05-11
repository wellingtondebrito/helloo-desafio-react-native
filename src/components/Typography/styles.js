import styled, { css } from "styled-components/native";

export const Wrapper = styled.Text`
  ${({ theme, color, variant, align }) => css`
    ${variant === "h1" &&
    css`
      font-size: ${theme.font.sizes.xxlarge};
      font-weight: 700;
    `}
    ${variant === "paragraph" &&
    css`
      font-size: ${theme.font.sizes.large};
      margin-top: 8px;
      line-height: 30px;
    `}
    ${variant === "text" &&
    css`
      font-size: ${theme.font.sizes.xlarge};
      font-weight: 500;
      text-transform: uppercase;
    `}

    ${color === "purple" &&
    css`
      color: #3d2080;
    `}
    ${color === "white" &&
    css`
      color: ${theme.colors.white};
    `}
    ${color === "gray" &&
    css`
      color: ${theme.colors.gray};
    `}
    ${color === "primary" &&
    css`
      color: ${theme.colors.orange};
    `}
    ${align === "center" &&
    css`
      text-align: center;
    `}
    ${align === "left" &&
    css`
      text-align: left;
    `}
    ${align === "right" &&
    css`
      text-align: right;
    `}
    ${align === "justify" &&
    css`
      text-align: justify;
    `}
  `}
`;
