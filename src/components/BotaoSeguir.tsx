import { useState } from "react";
import { Pressable, Text, StyleSheet } from "react-native";

export default function BotaoSeguir() {
  const [seguindo, setSeguindo] = useState(false);

  return (
    <Pressable
      onPress={() => setSeguindo(!seguindo)}
      style={[styles.botao, seguindo ? styles.seguindo : styles.naoSeguindo]}
    >
      <Text style={[styles.texto, seguindo ? styles.textoSeguindo : styles.textoNaoSeguindo]}>
        {seguindo ? "Seguindo" : "Seguir"}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  botao: { width: "100%", paddingVertical: 12, borderRadius: 8, alignItems: "center" },
  naoSeguindo: { backgroundColor: "#2563EB" },
  seguindo: { backgroundColor: "transparent", borderWidth: 1, borderColor: "#2563EB" },
  texto: { fontWeight: "600" },
  textoNaoSeguindo: { color: "#FFFFFF" },
  textoSeguindo: { color: "#2563EB" },
});