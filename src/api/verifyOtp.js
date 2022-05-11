import AsyncStorage from "@react-native-async-storage/async-storage";
import { api } from "./baseUrl";

export const verifyOtp = (value, navigation) => {

  AsyncStorage.getItem('token').then((token)=>{
      const auth = JSON.parse(token)
      console.log("token aqui",auth)
    const body = {
        code: value,
        token: auth,
      };    
      api
        .post("/validate-sms", body)
        .then((res) => {
         console.log(res.data)
          navigation.navigate('Success')
        })
        .catch((err) => {
          console.log(err);
        });
  }).catch((err)=>{
      console.log(err)
  })

 
};
