import P from 'prop-types';
import * as S from './styles';

const Typography = ({ children, color, variant, align='justify' }) => {
    return (
        <S.Wrapper color={color} variant={variant} align={align}>
            {children}
        </S.Wrapper>
    );
};

export default Typography

Typography.propTypes = {
    children: P.string.isRequired,
    color: P.oneOf(['purple', 'white', 'gray', 'primary']),
    variant: P.oneOf(['h1', 'paragraph', 'text']),
    align: P.oneOf(['center', 'left', 'right', 'justify'])
};
