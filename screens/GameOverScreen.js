import { View, Image, StyleSheet, Text } from "react-native";
import Colors from "../constants/colors";
import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButtom";

const GameOverScreen = ({ rounds, userNumber, onStartGame }) => {
   return (
      <View style={styles.container}>
         <Title>GAME OVER!</Title>
         <View style={styles.imageContainer}>
            <Image
               style={styles.image}
               source={require("../assets/success.png")}
            />
         </View>
         <Text style={styles.summaryText}>
            Your phone needed <Text style={styles.heighlight}>{rounds}</Text>{" "}
            rounds to guess the number{" "}
            <Text style={styles.heighlight}>{userNumber}</Text>.
         </Text>
         <PrimaryButton onPress={onStartGame}>Start New Game</PrimaryButton>
      </View>
   );
};
export default GameOverScreen;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      padding: 24,
      justifyContent: "center",
      alignItems: "center",
   },
   imageContainer: {
      borderRadius: 150,
      width: 300,
      height: 300,
      borderWidth: 3,
      borderColor: Colors.primary800,
      overflow: "hidden",
      margin: 36,
   },
   image: {
      width: "100%",
      height: "100%",
   },
   summaryText: {
      fontFamily: "open-sans",
      fontSize: 20,
      textAlign: "center",
      marginBottom: 24,
   },
   heighlight: {
      fontFamily: "open-sans-bold",
      color: Colors.primary500,
   },
});
