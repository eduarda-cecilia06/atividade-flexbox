import { View, StyleSheet, useWindowDimensions } from "react-native";

type Props = { publicacoes: string[] };

const COLUNAS = 3;
const GAP = 8;
const PADDING_LATERAL = 16;

export default function GradeDePublicacoes({ publicacoes }: Props) {
  const { width } = useWindowDimensions();

  // Largura disponível = largura da tela - padding lateral (16 * 2) - gaps entre colunas (8 * 2)
  const larguraDisponivel = width - PADDING_LATERAL * 2 - GAP * (COLUNAS - 1);
  const tamanhoItem = Math.floor(larguraDisponivel / COLUNAS);

  return (
    <View style={styles.container}>
      {publicacoes.map((cor, i) => (
        <View
          key={i}
          style={[
            styles.item,
            { width: tamanhoItem, height: tamanhoItem, backgroundColor: cor },
          ]}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: GAP,
    paddingHorizontal: PADDING_LATERAL,
    paddingTop: 8,
  },
  item: {
    borderRadius: 6,
  },
});