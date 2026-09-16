import { View, Text, StyleSheet } from "react-native";

export default function RefatoracaoEstilos() {
  return (
    <View style={styles.row}>
      <View style={styles.card}><Text>Card 1</Text></View>
      <View style={styles.card}><Text>Card 2</Text></View>
      <View style={styles.card}><Text>Card 3</Text></View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: "row", justifyContent: "space-between", padding: 16 },
  card: { flex: 1, alignItems: "center" },
});