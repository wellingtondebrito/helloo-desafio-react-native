import {useState} from 'react';
import { useNavigation } from "@react-navigation/native";

import * as S from "./styles";

import Typography from "../../components/Typography";
import Header from "../../components/Header";
import FieldCode from "../../components/FieldCode";
import Button from "../../components/Button";

import masks from '../../utils/Masks'
import { verifyOtp } from '../../api/verifyOtp';

const SMSScreen = ({route}) => {
  const navigation = useNavigation();
  const [code, setCode] = useState('')

    
  return (
    <S.Wrapper>
      <Header onPress={()=>navigation.goBack()} />
      <S.Container>
        <Typography color="purple" variant="h1" align="left">
          Digite o código enviado por sms
        </Typography>
        <Typography color="purple" variant="paragraph" align="left">
          Telefone {masks.phone(route.params.phone)}
        </Typography>
        <FieldCode value={code} setValue={setCode}/>
        <Button
          color="primary"
          size="small"
          onPress={() => verifyOtp(code, navigation)}
          children={
            <Typography variant="text" color="white">
              Continuar
            </Typography>
          }
        />
      </S.Container>
    </S.Wrapper>
  );
};

export default SMSScreen;
