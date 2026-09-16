import { View, Text, StyleSheet } from "react-native";

type Props = { texto: string };

export default function IconeComTexto({ texto }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.icone} />
      <Text style={styles.texto}>{texto}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: "row", alignItems: "center", gap: 12, padding: 16 },
  icone: { width: 24, height: 24, backgroundColor: "#3B82F6", borderRadius: 4 },
  texto: { fontSize: 16, color: "#1F2937" },
});