//import React from 'react';
import { useState, useEffect } from 'react'
//import React from 'react';
//import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Countdown from './Countdown.js'
import Banner from './Banner.js'


const App = () => {

  //states
  const [timer, setTimer] = useState("03:00");
  const [running, setRunning] = useState(true)
  const [button, setButton] = useState("Start")
  const [buttonColor, setButtonColor] = useState("green")


  return (
    <>
      <Countdown
        timer={timer}
        setTimer={setTimer}
        running={running}
        setRunning={setRunning}
        button={button}
        setButton={setButton}
        buttonColor={buttonColor}
        setButtonColor={setButtonColor}
      />
<Banner />
    </>
  )

}

export default App;