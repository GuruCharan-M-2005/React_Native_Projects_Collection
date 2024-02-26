import React from 'react'
import Navbar from './Project_1_Navbar/Navbar'
import { View } from 'react-native'
import Filtering from './Project_2_Filtering/Filtering'
import RegisterForm from './Project_3_Registration_Form/Register_Form'
import Quiz from './Project_4_Quiz/Quiz'
import Calculator from './Project_5_Calculator/Calculator'

export default function App() {
  return (
    <View>
      {/* <Quiz/> */}
      <Calculator/>
      {/* <RegisterForm/> */}
    </View>
  )
}
