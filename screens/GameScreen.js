import { useState, useEffect } from "react";
import { View, Text, StyleSheet, Alert, FlatList } from "react-native";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButtom from "../components/ui/PrimaryButtom";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import { Ionicons } from "@expo/vector-icons";
import GuessLogItem from "../components/game/GuessLogItem";

const generateRandomBetween = (min, max, exclude) => {
   const rndNum = Math.floor(Math.random() * (max - min)) + min;

   if (rndNum === exclude) {
      return generateRandomBetween(min, max, exclude);
   } else {
      return rndNum;
   }
};

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({ userChoosenNumber, onGameOver }) => {
   const initialGuess = generateRandomBetween(1, 100, userChoosenNumber);
   const [currentGuess, setCurrentGuess] = useState(initialGuess);
   const [guessRounds, setGuessRounds] = useState([initialGuess]);

   useEffect(() => {
      if (currentGuess == userChoosenNumber) {
         onGameOver(guessRounds.length);
      }
   }, [currentGuess, userChoosenNumber, onGameOver]);

   useEffect(() => {
      minBoundary = 1;
      maxBoundary = 100;
   }, []);

   const nextGuessHandler = (direction) => {
      if (
         (direction === "lower" && currentGuess < userChoosenNumber) ||
         (direction === "greater" && currentGuess > userChoosenNumber)
      ) {
         Alert.alert("Dont't lie!", "You know that this is wrong...", [
            { text: "Sorry", style: "cancel" },
         ]);
         return;
      }
      if (direction === "lower") {
         maxBoundary = currentGuess;
      } else {
         minBoundary = currentGuess + 1;
      }

      const newRndNumber = generateRandomBetween(
         minBoundary,
         maxBoundary,
         currentGuess
      );

      setCurrentGuess(newRndNumber);
      setGuessRounds((state) => {
         return [...state, newRndNumber];
      });
   };

   const guessRoundsListLenght = guessRounds.length;

   return (
      <View style={styles.container}>
         <Title>Opponent's Guess</Title>
         <NumberContainer>{currentGuess}</NumberContainer>
         <Card>
            <InstructionText style={styles.instructionText}>
               Higher or lower?
            </InstructionText>
            <View style={styles.buttonsContainer}>
               <View style={styles.button}>
                  <PrimaryButtom onPress={nextGuessHandler.bind(this, "lower")}>
                     <Ionicons name="md-remove" size={24} color="white" />
                  </PrimaryButtom>
               </View>
               <View style={styles.button}>
                  <PrimaryButtom
                     onPress={nextGuessHandler.bind(this, "greater")}
                  >
                     <Ionicons name={"md-add"} size={24} color="white" />
                  </PrimaryButtom>
               </View>
            </View>
         </Card>
         <View style={styles.listContainer}>
            <FlatList
               data={guessRounds}
               keyExtractor={(item) => item}
               renderItem={(itemData) => (
                  <GuessLogItem
                     roundNumber={guessRoundsListLenght - itemData.index}
                     guess={itemData.item}
                  />
               )}
            />
         </View>
      </View>
   );
};

export default GameScreen;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      padding: 24,
   },
   buttonsContainer: {
      flexDirection: "row",
      justifyContent: "center",
   },
   button: {
      flex: 1,
   },
   instructionText: {
      marginBottom: 12,
   },
   listContainer: {
      flex: 1,
   },
});
