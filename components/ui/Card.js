import { StyleSheet, View } from "react-native";
import Colors from "../../constants/colors";

const Card = ({ children }) => {
   return <View style={styles.cardContainer}>{children}</View>;
};
export default Card;

const styles = StyleSheet.create({
   cardContainer: {
      alignItems: "center",
      padding: 16,
      marginTop: 36,
      marginHorizontal: 24,
      borderRadius: 8,
      backgroundColor: Colors.primary800,
      elevation: 4, //android
      shadowColor: "black", //ios
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 6,
      shadowOpacity: 0.25,
   },
});
