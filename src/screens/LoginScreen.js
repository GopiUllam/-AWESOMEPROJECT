import React, {useState} from 'react';
import {Button,Text,TextInput,TouchableOpacity,View,StyleSheet} from 'react-native';


const LoginScreen = ({navigation}) => {

  const [email,setEmail] = useState(null);
  const [password,setPassword] = useState(null);


  return (
     <View style={styles.container}>
      <View style={styles.wrapper}>

        <Text>Username:</Text>
        <TextInput 
        style={styles.input}
        value={email}
        placeholder="Enter email"
        onChangeText={text => setEmail(text)}
        />
        
        <Text>Password:</Text>
        <TextInput 
        style={styles.input}
        value={password}
        placeholder="Enter password"
        onChangeText={text => setPassword(text)}
        secureTextEntry
        />

        <Button
        title="Login"
        onPress={() => {
          login(email,password)
        }}
        />

        <View style={{flexDirection:'row',marginTop: 20}}>
           <Text>Don't have an account?</Text>
           <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text style={styles.link}>Register</Text>
           </TouchableOpacity>
        </View>

      </View>
     </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: "center",
    justifyContent:'center',
    backgroundColor:'green'

  }, 
  wrapper: {
    width: '80%',
    backgroundColor:'white',
    paddingHorizontal:20,
    paddingVertical:20,
    borderRadius:10
  }, 
  input: {
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#bbb',
    borderRadius: 5,
    paddingHorizontal: 14,
  },
  link: {
    color:'blue'
  }
});


export default LoginScreen;