import styled, { css } from 'styled-components/native';

export const Wrapper = styled.TextInput`
    ${({ theme }) => css`
        border: none;
        width: 90%;
        height: 46px;
        border-radius: 6px;
        background: rgba(61, 32, 128, 0.05);
        padding: 12px 14px 13px;
        margin-top: 16px;
        margin-bottom: 16px;
    `}
`;
