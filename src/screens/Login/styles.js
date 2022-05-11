import styled, { css } from 'styled-components/native';
import theme from '../../../styles/Theme'

export const Wrapper = styled.SafeAreaView`
    flex: 1;
    background-color: ${theme.colors.white};
`;

export const Container = styled.View`
    width: 90%;
    margin: 0 auto;
    padding-top: 8px;
    padding-bottom: 8px;
`

