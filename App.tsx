import { SafeAreaProvider } from "react-native-safe-area-context";
import TelaPerfil from "./src/screens/TelaPerfil";

export default function App() {
  return (
    <SafeAreaProvider>
      <TelaPerfil />
    </SafeAreaProvider>
  );
}