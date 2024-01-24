import React from 'react';
import {
  View,
  Text
} from 'react-native';
// import {webView} from 'react-native';
import WebView from 'react-native-webview';

const WebViewNpmInstall = () => {
  return (
    <WebView source={{uri:"https://reactnative.dev/"}} />
  );
}

export default WebViewNpmInstall;
// npm i react-native-webview // --> for view any site into the emulator
// npx react-native run-android // --> for android command to dipaly the content