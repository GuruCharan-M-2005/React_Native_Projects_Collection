import React, { useState } from 'react';
import { View } from 'react-native';
import Navbar from './Project_1_Navbar/Navbar';
import Quiz from './Project_4_Quiz/Quiz';
import Temperature from './Project_6_Temperature_Controller/Temperature';
import Counter from './Project_8_Counter/Counter';
import WeatherAPI from './Project_10_WeatherAPI/WeatherAPI';
import QR_Code from './Project_11_QR_Generator/QRGenerator';
import Profile_Card from './Project_12_Profile_Card/ProfileCard';
import Adventure from './Project_18_AdventurePage/Adventure';
import Portfolio from './Project_21_Portfolio/Portfolio';

export default function App() {
  return (
    <View>
      <Portfolio/>
    </View>
  );
}
