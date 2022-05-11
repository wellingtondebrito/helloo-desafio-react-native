import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import * as S from "./styles";
import Typography from "../../components/Typography";
import Header from "../../components/Header";
import TextInput from "../../components/TextInput";
import Button from "../../components/Button";
import { StatsDimensions } from "@styled-icons/boxicons-regular/Stats";
import { goToLogin } from "../../components/api/login";



const Login = () => {
  const navigation = useNavigation();
  const [phone, setPhone] = useState('')

  return (
    <S.Wrapper>
      <StatusBar style="dark" />
      <Header onPress={() => navigation.goBack()} />
      <S.Container>
        <Typography variant="h1" color="purple">
          Qual é o seu celular?
        </Typography>
        <TextInput
          placeHolder="(xx) xxxxx-xxxx"
          value={phone}
          onChange={(text) => setPhone(text)}
        />
        <Button
          color="primary"
          size="small"
          onPress={()=>goToLogin(phone, navigation)}
          children={
            <Typography color="white" variant="text">
              Continuar
            </Typography>
          }
        />
      </S.Container>
    </S.Wrapper>
  );
};

export default Login;
