import { useRef } from "react";
import { useState } from "react";
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  RefreshControl,
  StatusBar,
} from "react-native";
import { WebView } from "react-native-webview";
import RNShake from "react-native-shake";
import { EventRegister } from 'react-native-event-listeners';

const MyAPP = "https://www.dorm.com.ng/v2.5/app";

export default function App() {
  const [refresh, setRefresh] = useState(false);

  const webViewRef = useRef();
  const pullrefresh = () => {
    setRefresh(true);
    webViewRef.current.reload();
    setTimeout(() => {
      setRefresh(false);
    }, 2000);
  };


  const shakeRefresh = RNShake.addListener(() => {
    setRefresh(true);
    webViewRef.current.reload();
    setTimeout(() => {
      setRefresh(false);
    }, 2000);
  })



  return (
    <ScrollView
      contentContainerStyle={styles.container}
    >
      <View style={{ width: "100%", height: "100%" }}>
        <StatusBar
          animated={true}
          backgroundColor="#1597E2"
          barStyle={"light-content"}
          showHideTransition={"fade"}
          hidden={false}
        />
        <WebView
          ref={webViewRef}
          source={{ uri: MyAPP }}
          javaScriptEnabled={true}
          domStorageEnabled={true}
        />
      </View>
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222",
    alignItems: "center",
    justifyContent: "center",
  },
});
