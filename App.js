/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { Component } from 'react';
 import {
   SafeAreaView,
   StyleSheet,
   ScrollView,
   View,
   Text,
   StatusBar,
   Button,
   Alert,
 } from 'react-native';
 
 import {
   Header,
   LearnMoreLinks,
   Colors,
   DebugInstructions,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';
 
 import  {SplashScreen}   from '@screens';
 
 import {
   OnbordingStack,
 
 } from '@navigations';
 
 class App extends Component {
 
   constructor(props) {
     super(props);
 
     this.state = { isLoading: true };
   };
 
   performTimeConsumingTask = async () => {
     return new Promise((resolve) =>
       setTimeout(
         () => { resolve('result') },
         2000
       )
     );
   };
 
   async componentDidMount() {
     const data = await this.performTimeConsumingTask();
     if (data !== null) {
       this.setState({ isLoading: false });
     }
   }
 
   render() {
     if (this.state.isLoading) {
       return (
         <>
           <SplashScreen />
         </>
       );
     }
     return (
       <>
         <OnbordingStack />
         {/* <LoginScreen /> */}
       </>
     );
   };
 
 };
 
 const styles = StyleSheet.create({
   scrollView: {
     backgroundColor: Colors.lighter,
   },
   engine: {
     position: 'absolute',
     right: 0,
   },
   body: {
     backgroundColor: Colors.white,
   },
   sectionContainer: {
     marginTop: 32,
     paddingHorizontal: 24,
   },
   sectionTitle: {
     fontSize: 24,
     fontWeight: '600',
     color: Colors.black,
   },
   sectionDescription: {
     marginTop: 8,
     fontSize: 18,
     fontWeight: '400',
     color: Colors.dark,
   },
   highlight: {
     fontWeight: '700',
   },
   footer: {
     color: Colors.dark,
     fontSize: 12,
     fontWeight: '600',
     padding: 4,
     paddingRight: 12,
     textAlign: 'right',
   },
 });
 
 export default App;
 