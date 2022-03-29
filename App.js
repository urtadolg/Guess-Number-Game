import { useState } from "react";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/colors";
import GameOverScreen from "./screens/GameOverScreen";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export default function App() {
   const [userNumber, setUserNumber] = useState("");
   const [gameIsOver, setGameIsOver] = useState(true);
   const [guessRounds, setGuessRounds] = useState(0);

   const [fontsLoaded] = useFonts({
      "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
      "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
   });

   if (!fontsLoaded) {
      return <AppLoading />;
   }

   const pickedNumberHandler = (pickedNumber) => {
      setUserNumber(pickedNumber);
      setGameIsOver(false);
   };

   const gameOverHandler = (numberOfRounds) => {
      setGameIsOver(true);
      setGuessRounds(numberOfRounds);
   };

   const startNewGameHandler = () => {
      setUserNumber(null);
      setGuessRounds(0);
   };

   let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

   if (userNumber) {
      screen = (
         <GameScreen
            userChoosenNumber={userNumber}
            onGameOver={gameOverHandler}
         />
      );
   }

   if (gameIsOver && userNumber) {
      screen = (
         <GameOverScreen
            rounds={guessRounds}
            userNumber={userNumber}
            onStartGame={startNewGameHandler}
         />
      );
   }

   return (
      <LinearGradient
         colors={[Colors.primary700, Colors.accent500]}
         style={styles.container}
      >
         <ImageBackground
            source={require("./assets/background.png")}
            resizeMode="cover"
            style={styles.container}
            imageStyle={styles.backgroundImage}
         >
            <SafeAreaView style={styles.container}>{screen}</SafeAreaView>
         </ImageBackground>
      </LinearGradient>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
   },
   backgroundImage: {
      opacity: 0.15,
   },
});
