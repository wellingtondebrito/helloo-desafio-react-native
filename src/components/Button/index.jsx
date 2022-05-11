import P from "prop-types";
import * as S from "./Styles";

const Button = (
  { children, 
    color, 
    size, 
    onPress, 
    outlined = false }
  ) => {
  return (
    <S.Wrapper 
      onPress={onPress} 
      color={color} 
      size={size} 
      outlined={outlined}
      >
      {children}
    </S.Wrapper>
  );
};

export default Button;

Button.propTypes = {
  children: P.node.isRequired,
  color: P.oneOf(["primary", "white"]),
  size: P.oneOf(["small", "medium"]),
  onPress: P.func,
  outlined: P.bool,
};
