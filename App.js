//import React from 'react';
import { useState, useEffect } from 'react'
import mobileAds from 'react-native-google-mobile-ads';
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
import Inter from './Inter.js'
import Reward from './Reward.js'

const App = () => {

// initialize mobile ads sdk
/*
mobileAds()
  .initialize()
  .then(adapterStatuses => {
    // Initialization complete!
  });*/

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
<Inter />
<Reward />
    </>
  )
/*
  return (
      <>
       <Banner />

      </>
    )*/


}

export default App;