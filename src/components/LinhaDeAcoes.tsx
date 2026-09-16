import { View, Text, Pressable, StyleSheet } from "react-native";

export default function LinhaDeAcoes() {
  return (
    <View style={styles.container}>
      <View style={styles.icone} />
      <Pressable>
        <Text style={styles.link}>Ver mais</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 16, backgroundColor: "#F3F4F6" },
  icone: { width: 24, height: 24, backgroundColor: "#8B5CF6", borderRadius: 12 },
  link: { color: "#2563EB", fontWeight: "600" },
});