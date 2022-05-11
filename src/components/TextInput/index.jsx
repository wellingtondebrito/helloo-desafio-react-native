import P from 'prop-types';
import * as S from './styles';
//import masks from '../../utils/Masks'

const TextInput = ({placeHolder, value, onChange}) => {
    return (
        <S.Wrapper 
            placeholder={placeHolder} 
            placeholderTextColor="#867f97"
            keyboardType='phone-pad'
            value={value}
            onChangeText={onChange}
        />
            
    );
};

export default TextInput

TextInput.propTypes = {
    placeHolder: P.string,
    value: P.node,
    onChange: P.node,
}