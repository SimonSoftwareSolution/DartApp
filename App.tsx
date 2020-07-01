import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, TouchableOpacity, Text, View, TextInput, StatusBar, TextInputChangeEventData} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import auth from '@react-native-firebase/auth';
import * as firebase from 'firebase';

export default function App() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  var firebaseConfig = {
    apiKey: "AIzaSyBBU6eZB7zPxM4FqBxLQY6LPsQrHMGS0Tg",
    authDomain: "dartmatchmakingapp.firebaseapp.com",
    databaseURL: "https://dartmatchmakingapp.firebaseio.com",
    projectId: "dartmatchmakingapp",
    storageBucket: "dartmatchmakingapp.appspot.com",
    messagingSenderId: "85194343371",
    appId: "1:85194343371:web:957c07b4a0a15f0a7cac4e",
    measurementId: "G-K6GHE9NTWP"
  };
  try 
  {
    firebase.initializeApp(firebaseConfig);
  }
  catch 
  {

  }
  
  function onEmailChanged(value: TextInputChangeEventData)
  {
      setEmail(value.text);
  }
  
  function onPasswordChanged(value: TextInputChangeEventData)
  {
      setPassword(value.text);
  }
  return (
   
    <LinearGradient colors={['black','#019875', 'black']} style={styles.container}>
         <Image
             style={{width: 150, height: 150, opacity : 0.7, marginTop : 50}}
             source={require('./loginLogo.png')}/>
          <View style={styles.textInputWrapper} >
                      <Image style={{width: 20, height: 20, opacity : 0.7,}} source={require('./userLoginIcon.png')}/>
                      <TextInput style={styles.TextInput} underlineColorAndroid='transparent' placeholder="Username" placeholderTextColor='white' onChange={(e) =>onEmailChanged(e.nativeEvent)}/>
          </View>
          <View style={styles.textInputWrapper} >
                      <Image style={{width: 20, height: 20, opacity : 0.7,}} source={require('./lockIcon.png')}/>
                      <TextInput style={styles.TextInput} underlineColorAndroid='transparent' placeholder="Password" placeholderTextColor='white' onChange={(e) =>onPasswordChanged(e.nativeEvent)}/>
          </View>
          <TouchableOpacity
                  style={styles.loginButton}
                  onPress={() => {auth().signInWithEmailAndPassword(email, password).catch().then(() =>  alert('Sucessfully Login'))}}>
                <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <View/>
          <StatusBar hidden />
    </LinearGradient>
  );
}


const styles = StyleSheet.create({
container: {
  flex: 1,
  flexGrow : 1,
  flexDirection: 'column',
  alignSelf : 'stretch',
  alignItems : 'center',
  justifyContent : 'space-around'
},
logoContainer: {
alignItems: 'center',
flex: 1,
justifyContent: 'flex-end',
backgroundColor: 'transparent',
},

buttonView : {
    maxWidth: 400,
    minWidth: 200,
    backgroundColor: 'transparent',
    flex: 1,
    justifyContent: 'center',
},
usernameContainer: {
    flex : 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center'
},
passwordContainer: {
    flex : 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'flex-start'
},
loginButton : {
  minWidth: 200,
    padding: 10,
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderRadius: 10,
    borderColor: '#f5f6fa',
    borderWidth: 2,
    opacity : 0.5,
},
TextInput: {
  marginLeft : 15,
  flex : 1,
  opacity : 0.5,
  alignSelf : 'stretch'
},
textInputWrapper: {
  flexDirection : 'row',
  opacity : 0.5,
  margin: 10,
  borderWidth: 2,
  borderColor: '#f5f6fa',
  backgroundColor: 'transparent',
  borderRadius: 20,
  padding: 10,
  alignItems : 'center',
  justifyContent : 'center',
  maxWidth: 200
},
buttonText : {
  color : 'white',
},
signInText : {
  marginTop : 20,
  color : 'white',
  fontSize : 30,
},
accountText : {
  marginTop : 20,
  color : 'white',
  fontSize : 10,
  opacity : 0.5,
},
registerText : {
  marginTop : 20,
  color : 'white',
  fontSize : 10,
  opacity : 0.8,
},
});
