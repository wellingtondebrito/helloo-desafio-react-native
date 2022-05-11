import P from 'prop-types'
import * as S from './styles';
import { AntDesign } from '@expo/vector-icons';

const Header = ({onPress}) => {
    return (
        <S.Wrapper>
            <S.IconWrapper onPress={onPress}>
                <AntDesign name="arrowleft" size={32} color="#3d2080" />
            </S.IconWrapper>
        </S.Wrapper>
    );
};

export default Header;

Header.propTypes = {
    onPress: P.func
}