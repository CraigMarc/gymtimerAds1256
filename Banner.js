import { useState, useEffect, useRef } from 'react'
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';

const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-3866044541725967/8548189104';
//const adUnitId = "ca-app-pub-3866044541725967/8548189104"

function Banner() {
  return (
    <BannerAd
      unitId={adUnitId}
      size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
    />
  );
}


/*
function Banner() {
return (
// place your own ad unit id in the unitId variable

      <BannerAd
        size={BannerAdSize.BANNER}
        unitId="ca-app-pub-3866044541725967/8548189104"
        onAdLoaded={() => {
          console.log('Advert loaded');
        }}
        onAdFailedToLoad={error => {
          console.error('Advert failed to load: ', error);
        }}
        />
        )
}*/

export default Banner;
