# Helloo Morador


Oi tudo bem ? 
Estamos em uma etapa muito importante do projeto, por isso precisamos apreciar de uma forma bem objetiva em que fase do projeto você pode se encaixar.

Por isso temos um pequeno desafio, que consiste em um setup inicial do applicativo. Veja se faz sentido para você esse desafio.



## Fases do desafio

- [ ] - Clone do projeto
- [ ] - Realizar desafio
- [ ] - Criar uma pull request para desafio

### Requisitos

*No projeto como todo você vai precisar ter os seguintes conhecimentos.*

- [x] NodeJs
- [x] React Native
- [x] Expo
- [x] Firebase Functions
- [x] Firebase Storage
- [x] Algolia
- [x] Apple Store
- [x] Google store
- [x] Rest API

*Mas para o desafio você usará somente*

- [x] React Native
- [x] Expo
- [x] Rest API

### Objetivos de desafio

Precisamos de simplicidade, mas que seja funcional.
Então vamos aos `endpoints` que você vai precisar usar.

- 1 - `https://www.figma.com/file/U20bHl0SCzcRurTApwJy3Y/?node-id=0%3A1` - projeto do figma
- 2 - `[POST] -  https://us-central1-app-helloo.cloudfunctions.net/app/api/auth/login` - url de autenticação
```json
{
	"phone": "",//numero de telefone valido
	"code": 11,
	"countryCode": "55"
}
```
- 3 - `[POST] - https://us-central1-app-helloo.cloudfunctions.net/app/api/auth/validate-sms ` - validar o sms
```json
{
	
	"code": "",// gerado pelo endpoint de autenticacao
	"token": "" // token gerado pelo endpoint de autenticacao
}
```

### Recursos do projeto

O que esperamos encontrar nessa etapa do desafio é a etapa inicial de autenticação do morador do projeto no figma `1`, seguintes telas funcionando.

- [ ] - 2. Welcome Board - 2
- [ ] - 3. Login 1
- [ ] - 3. Login 2
- [ ] - 4. Success

