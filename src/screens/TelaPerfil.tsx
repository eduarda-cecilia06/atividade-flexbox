import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ListaDeChips from "../components/ListaDeChips";
import GradeDePublicacoes from "../components/GradeDePublicacoes";
import BotaoSeguir from "../components/BotaoSeguir";

const interesses = [
  "React Native", "Expo", "TypeScript", "Flexbox", "UI/UX",
  "Mobile", "JavaScript", "Design", "Frontend",
];

const publicacoes = [
  "#ef4444", "#f97316", "#eab308", "#22c55e", "#14b8a6",
  "#06b6d4", "#3b82f6", "#8b5cf6", "#ec4899",
];

export default function TelaPerfil() {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={{ paddingBottom: 24 }}>
        <View style={styles.header}>
          <Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjdhhYpjSFZtaJUjurWDcm-HOzc_heTnpXDZjc7mxAi565QeXiK-qoFJDZ&s=10" }} style={styles.avatar} />
          <View>
            <Text style={styles.nome}>Duda Cecília</Text>
            <Text style={styles.username}>@Dudis</Text>
          </View>
        </View>

        <View style={styles.stats}>
          <View style={styles.statItem}><Text style={styles.statNumero}>12</Text><Text style={styles.statLabel}>Posts</Text></View>
          <View style={styles.statItem}><Text style={styles.statNumero}>1.2k</Text><Text style={styles.statLabel}>Seguidores</Text></View>
          <View style={styles.statItem}><Text style={styles.statNumero}>340</Text><Text style={styles.statLabel}>Seguindo</Text></View>
        </View>

        <Text style={styles.secao}>Interesses</Text>
        <ListaDeChips itens={interesses} />

        <Text style={styles.secao}>Publicações</Text>
        <GradeDePublicacoes publicacoes={publicacoes} />

        <View style={styles.rodape}><BotaoSeguir /></View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#FFFFFF" },
  header: { flexDirection: "row", alignItems: "center", gap: 16, padding: 16 },
  avatar: { width: 80, height: 80, borderRadius: 40 },
  nome: { fontSize: 20, fontWeight: "700", color: "#111827" },
  username: { color: "#6B7280" },
  stats: { flexDirection: "row", justifyContent: "space-evenly", paddingVertical: 16, borderTopWidth: 1, borderBottomWidth: 1, borderColor: "#E5E7EB" },
  statItem: { alignItems: "center" },
  statNumero: { fontSize: 18, fontWeight: "700" },
  statLabel: { color: "#6B7280" },
  secao: { paddingHorizontal: 16, paddingTop: 16, paddingBottom: 4, fontWeight: "700", color: "#1F2937" },
  rodape: { paddingHorizontal: 16, paddingTop: 24 },
});