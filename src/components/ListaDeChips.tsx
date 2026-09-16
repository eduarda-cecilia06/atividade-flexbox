import { View, Text, StyleSheet } from "react-native";

type Props = { itens: string[] };

export default function ListaDeChips({ itens }: Props) {
  return (
    <View style={styles.container}>
      {itens.map((item, i) => (
        <View key={i} style={styles.chip}>
          <Text style={styles.chipTexto}>{item}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: "row", flexWrap: "wrap", gap: 8, padding: 16 },
  chip: { paddingHorizontal: 16, paddingVertical: 8, backgroundColor: "#D1FAE5", borderWidth: 1, borderColor: "#34D399", borderRadius: 999 },
  chipTexto: { color: "#065F46", fontWeight: "500" },
});