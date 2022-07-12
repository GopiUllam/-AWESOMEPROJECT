import React from 'react'
import { Button, View, Text, StyleSheet } from 'react-native'
// import SelectList from 'react-native-dropdown-select-list'
import SelectButton from './SelectButton'
import Styles from '../components/Style'


const Categroy = () => {
  
  return (
    <View style={Styles.Container}>
      
          <Text style={Styles.Header}>Categroy</Text>

          <View>
            <Text>Visit Type:</Text>
            <SelectButton />
          </View>


         <View>
            <Text>Purpose of visit:</Text>
            <SelectButton />
          </View>

         
    </View>
  )
}


export default Categroy;

