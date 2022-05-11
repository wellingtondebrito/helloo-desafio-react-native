import styled, { css } from 'styled-components/native';

export const Wrapper = styled.View`
   flex: 1;
   display: flex;
   background-color: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(61,32,128,0) 35%, rgba(0,212,255,1) 100%);
`;

export const Container = styled.View`
    width: 80%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    position: absolute;
    left: 50px;
    bottom: 100px;
`
export const ButtonWrapper = styled.View`
    display: flex;
    margin: 16px auto;
    display: flex;    
`
export const Image = styled.Image`
    width: 60px;
`
