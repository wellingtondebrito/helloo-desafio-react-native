import AsyncStorage from "@react-native-async-storage/async-storage";
import { api } from "./baseUrl";

export const goToLogin = (value, navigation) => {
  const body = {
    phone: value,
    code: Number(value.slice(0, 2)),
    countryCode: "55",
  };

  api
    .post("/login", body)
    .then((res) => {
      AsyncStorage.setItem("token", JSON.stringify(res.data.token))
        .then(() => {
          console.log("Gravado com sucesso!");
        })
        .catch((err) => {
          console.log(err);
        });
      navigation.navigate('Sms', {phone: value})
      console.log(res.data)
    })
    .catch((err) => {
      console.log(err);
    });
};
