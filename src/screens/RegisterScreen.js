import React,{useState} from 'react'
import {Text, View,Button,TextInput,StyleSheet } from 'react-native'


const RegisterScreen = ({navigation}) => {

    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    
    console.log(firstName,lastName,email,password)

    // const submitForm = () => {
    //     if(firstName.length == '' || lastName.length == '' || email.length == '' || password.length == '' ) {
    //         alert("please enter the field")
    //     }else {
    //         navigation.navigate('Home')
    //     }
    // }

    const submitForm = () => {
        if(firstName.length == '') {
          alert('Enter ur fistname')
        }
        else if(lastName.length == '') {
        alert('Enter ur lastname')
        }
        else if(email.length == '') {
            alert('Enter ur email')
            }
        else if(password.length == '') {
                alert('Enter ur password')
                }
        else {
            navigation.navigate('Home')
            }
    }

    
    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>

              
                <Text>FirstName:</Text>
                <TextInput
                style={styles.input}
                value={firstName}
                placeholder="Enter first name"
                onChangeText={value => setFirstName(value)} />

                <Text>LastName:</Text>
                <TextInput
                style={styles.input}
                value={lastName}
                placeholder="Enter last name"
                onChangeText={value =>  setLastName(value)} />

               <Text>Email:</Text>
               <TextInput
                style={styles.input}
                value={email}
                placeholder="Enter email"
                onChangeText={value =>  setEmail(value)} />


                <Text>Password:</Text>
                <TextInput
                style={styles.input}
                value={password}
                placeholder="Enter ur Password"
                onChangeText={value =>  setPassword(value)}
                secureTextEntry />
                

               <View style={styles.btns}>

                    <Button 
                     title="SIGN IN"
                         //   onPress={() => navigation.navigate('Home')}
                      onPress={() => submitForm()}
                    />

                      <Button 
                          title="SIGN OUT"
                          onPress={() => navigation.navigate('Login')}
                      />
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
    }, 
    indi:{
      width: 30,
      padding:10
    },
    btns:{
    
        flexDirection: 'row',
        justifyContent: 'space-between'
     
    }
  });
  

export default RegisterScreen;
