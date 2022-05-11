import { createStackNavigator } from "@react-navigation/stack";
import Board from '../src/screens/Board';
import Login from '../src/screens/Login';
import SMSScreen from '../src/screens/SMSScreen';
import Success from "../src/screens/Success";

const Stack = createStackNavigator();

const Router = () => {
    return(
        <Stack.Navigator 
            initialRouteName="Board" 
            screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Board' component={Board}/>
            <Stack.Screen name='Login' component={Login}/>
            <Stack.Screen name='Sms' component={SMSScreen}/>
            <Stack.Screen name='Success' component={Success}/>
        </Stack.Navigator>
    )
}

export default Router;