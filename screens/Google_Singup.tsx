import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  StatusBar,
} from "react-native";
import { GoogleSignin } from "@react-native-google-signin/google-signin";

GoogleSignin.configure({
  webClientId: "278118908732-f3c6i58g247asnmjl8kf1fmlq94g3c10.apps.googleusercontent.com",
});

export default function GoogleSignup() {
        const [isLogin,setIsLogin]=useState(false)

 async function signIn() {
  try {
    await GoogleSignin.hasPlayServices();
    const user = await GoogleSignin.signIn();
    console.log(user);
  } catch (error) {
    console.log(error);
  }
}

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <View style={styles.logoContainer}>
        {/* <Image
          source={require("../assets/logo.png")}
          style={styles.logo}
        /> */}

        <Text style={styles.title}>DailyDairy</Text>

        <Text style={styles.subtitle}>
          Plan • Track • Remember • Manage
        </Text>

        <Text style={styles.description}>
          Organize your tasks, expenses and reminders
          in one place.
        </Text>
      </View>

      <TouchableOpacity style={styles.googleButton}
      onPress={signIn}
      >
        {/* <Image
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg",
          }}
          style={styles.googleIcon}
        /> */}

        <Text style={styles.googleText}>
          Continue with Google
        </Text>
      </TouchableOpacity>

      <Text style={styles.footer}>
        By continuing you agree to our
        {"\n"}
        Terms & Privacy Policy
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:"#081C3A",
    justifyContent:"space-between",
    paddingVertical:60,
    paddingHorizontal:25
  },

  logoContainer:{
    alignItems:"center",
    marginTop:40
  },

  logo:{
    width:120,
    height:120,
    resizeMode:"contain"
  },

  title:{
    color:"#fff",
    fontSize:34,
    fontWeight:"700",
    marginTop:20
  },

  subtitle:{
    color:"#5BE49B",
    fontSize:16,
    marginTop:8
  },

  description:{
    color:"#d7d7d7",
    textAlign:"center",
    marginTop:18,
    fontSize:15,
    lineHeight:24
  },

  googleButton:{
    backgroundColor:"#fff",
    height:58,
    borderRadius:16,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center"
  },

  googleIcon:{
    width:24,
    height:24,
    marginRight:12
  },

  googleText:{
    color:"#111",
    fontSize:17,
    fontWeight:"600"
  },

  footer:{
    color:"#9FA9B7",
    textAlign:"center",
    fontSize:13,
    lineHeight:22
  }

});