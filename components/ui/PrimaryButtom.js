import { View, Text, Pressable, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

const PrimaryButtom = ({ children, onPress }) => {
   return (
      <View style={styles.buttonOuterContainer}>
         <Pressable
            onPress={onPress}
            android_ripple={{ color: Colors.primary600 }}
            style={({ pressed }) =>
               pressed ? [styles.container, styles.pressed] : styles.container
            }
         >
            <Text style={styles.text}>{children}</Text>
         </Pressable>
      </View>
   );
};

export default PrimaryButtom;

const styles = StyleSheet.create({
   buttonOuterContainer: {
      borderRadius: 28,
      margin: 4,
      overflow: "hidden",
   },
   container: {
      backgroundColor: Colors.primary500,
      paddingVertical: 8,
      paddingHorizontal: 16,
      elevation: 2,
   },
   text: {
      color: "white",
      textAlign: "center",
   },
   pressed: {
      opacity: 0.75,
   },
});
