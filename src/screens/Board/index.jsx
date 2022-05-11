import * as S from "./styles";
import { StyleSheet, ImageBackground } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import Button from "../../components/Button";
import Typography from "../../components/Typography";

const image = "../../../assets/img/bg-board.png";

const Board = () => {

  const navigation = useNavigation();


  return (
    <S.Wrapper>
      <StatusBar style='light'/>
      <ImageBackground
        source={require(image)}
        resizeMode="cover"
        style={styles.image}
      >
        <S.Container>
          <Typography variant="h1" color="white">
            Novidades
          </Typography>
          <Typography variant="paragraph" color="white" align="center">
            Novo layout e novas funcionalidades para os síndicos
          </Typography>
          <S.ButtonWrapper>
            <Button
              color="primary"
              size="medium"
              onPress={()=> navigation.navigate('Login')}
              children={
                <Typography 
                  variant="text" 
                  children="Sou Morador" 
                  color="white" 
                />}
            />
            <Button
              color="white"
              size="medium"
              onPress={()=> navigation.navigate('Login')}
              children={
                <Typography 
                  variant="text" 
                  children="Sou Síndico" 
                  color="primary" 
                />}
            />
          </S.ButtonWrapper>
        </S.Container>
      </ImageBackground>
    </S.Wrapper>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center",
  },
});

export default Board;
