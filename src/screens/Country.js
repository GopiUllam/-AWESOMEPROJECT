import React from 'react'
import { Button, View, Text, StyleSheet } from 'react-native'
import SelectButton from './SelectButton'
import Styles from '../components/Style'




const Country = () => {
  return (
    <View style={Styles.Container}>
        
          <Text style={Styles.Header}>Country/State/Branch Info</Text>

          <View>
          <Text>country:</Text>
          <SelectButton />
         </View>


         <View>
         <Text>Branch:</Text>
          <SelectButton />
         </View>


         <View>
         <Text>State:</Text>
          <SelectButton />
         </View>

         
    </View>
  )
}


export default Country;

