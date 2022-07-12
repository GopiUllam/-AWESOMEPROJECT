import React from 'react'
import { View,TextInput,StyleSheet,Text } from 'react-native'
import SelectButton from './SelectButton'
import Styles from '../components/Style'



const Demo = () => {
  return (
    <View style={Styles.Container}>

          <Text style={Styles.Header}>Demographic Info</Text>

          <View >
               <Text>Social Security Number:</Text>
               <TextInput style={Styles.box} 
                placeholder='XXXXXXXXXXXX'/>
         </View>

         <View>
              <Text>First Name:</Text>
              <TextInput 
              style={Styles.box} 
              placeholder='first name'/>
         </View>


         <View>
            <Text>Last Name:</Text>
            <TextInput
             style={Styles.box} 
             placeholder='last name'/>
         </View>

         <Text>Phone number:</Text>
         <View style={Styles.ItemContainer}>
           
             <SelectButton style={Styles.buttonS}/>
             
             <TextInput
                style={Styles.phoneBox} 
                placeholder='phone number'/>

          </View>

          

         <View style={{marginTop:20}}>
               <Text>Additional email(s):</Text>
                <TextInput
                    style={Styles.box12} 
                    placeholder='Enter something here '/>
          </View>


         </View>

         
  
  )
}


export default Demo
