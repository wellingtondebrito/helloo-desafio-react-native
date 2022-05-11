import * as S from "./styles";
import { StyleSheet, ImageBackground } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import Button from "../../components/Button";
import Typography from "../../components/Typography";

const image = "../../../assets/img/bg-success.png";
const happy = "../../../assets/img/happy.png"

const Success = () => {

  
  return (
    <S.Wrapper>
      <StatusBar style='light'/>
      <ImageBackground
        source={require(image)}
        resizeMode="cover"
        style={styles.image}
      >
        <S.Container>
            <S.Image source={require(happy)}/>
          <Typography variant="h1" color="white">
            Tudo ok!
          </Typography>
          <Typography variant="paragraph" color="white" align="center">
            Estamos redirecionando para a tela principal...
          </Typography>
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

export default Success;
