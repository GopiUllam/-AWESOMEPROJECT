
import { Button, View, Text, StyleSheet,TouchableOpacity } from 'react-native'
import Categroy from './Categroy'
import Country from './Country'
import Demo from './Demo'
import PatientType from './PatientType'
import Styles from '../components/Style'
import Header from './Header'


const HomeScreen = ({navigation}) => {

  return (
    <View style={Styles.topMainContainer}>
         <Header />
         <PatientType />
         <Categroy />
         <Country />
         <Demo />

         
    </View>
  )
}




export default HomeScreen;
