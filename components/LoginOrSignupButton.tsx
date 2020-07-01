import {Text, View, TouchableOpacity, StyleSheet, GestureResponderEvent} from 'react-native';

export interface Props {
    handleClick: (event: GestureResponderEvent) => any;
    Text: string;
  }
  

export default function LoginOrSignupButton(props : Props) {
    return (
        <View style={styles.loginButtonContainer}>
        <TouchableOpacity style={styles.loginButton} onPress={props.handleClick}>
        <Text style={styles.buttonText}>{props.Text}</Text>
        </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create ({
    loginButtonContainer: {
        minWidth: 200,
        flex : 0.5,
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
      buttonText : {
        color : 'white',
      },
  });