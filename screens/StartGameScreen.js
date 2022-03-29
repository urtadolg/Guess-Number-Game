import { useState } from "react";
import { TextInput, View, StyleSheet, Alert, Text } from "react-native";
import PrimaryButtom from "../components/ui/PrimaryButtom";
import Colors from "../constants/colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

const StartGameScreen = ({ onPickNumber }) => {
   const [enteredValue, setEnteredValue] = useState("");

   const numberInputHandler = (input) => {
      setEnteredValue(input);
   };

   const onResetHandler = () => {
      setEnteredValue("");
   };

   const confirmHandler = () => {
      const numberChoosen = parseInt(enteredValue);

      if (isNaN(numberChoosen) || numberChoosen <= 0 || numberChoosen > 99) {
         Alert.alert("Invalid number", "Number has to be between 1 and 99.", [
            { text: "Okay", style: "destructive", onPress: onResetHandler },
         ]);

         return;
      }

      onPickNumber(enteredValue);
   };

   return (
      <View style={styles.rootContainer}>
         <Title>Guess My Number</Title>
         <Card>
            <InstructionText>Enter a Number</InstructionText>
            <TextInput
               style={styles.input}
               maxLength={2}
               keyboardType="number-pad"
               autoCapitalize="none"
               autoCorrect={false}
               testID="userInput"
               value={enteredValue}
               onChangeText={numberInputHandler}
            />
            <View style={styles.buttonsContainer}>
               <View style={styles.button}>
                  <PrimaryButtom onPress={onResetHandler}>Reset</PrimaryButtom>
               </View>
               <View style={styles.button}>
                  <PrimaryButtom onPress={confirmHandler}>
                     Confirm
                  </PrimaryButtom>
               </View>
            </View>
         </Card>
      </View>
   );
};

export default StartGameScreen;

const styles = StyleSheet.create({
   rootContainer: {
      flex: 1,
      marginTop: 100,
      alignItems: "center",
   },

   input: {
      alignSelf: "center",
      width: 50,
      height: 50,
      fontSize: 32,
      borderBottomColor: Colors.accent500,
      borderBottomWidth: 2,
      color: Colors.accent500,
      marginVertical: 8,
      fontWeight: "bold",
      textAlign: "center",
   },
   buttonsContainer: {
      flexDirection: "row",
      justifyContent: "center",
   },
   button: {
      flex: 1,
   },
});
