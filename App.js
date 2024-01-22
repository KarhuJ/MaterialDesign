import Login from "./screens/Login";
import { StyleSheet, Text, View } from 'react-native';
import { PaperProvider } from "react-native-paper";

export default function App() {
  return (
    <PaperProvider>
      <Login />
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
