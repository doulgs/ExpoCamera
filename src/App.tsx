// App.tsx
import React, { useState, useEffect } from "react";
import { SafeAreaView, Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { useCameraPermissions } from "expo-camera";
import { Header } from "./components/Header";
import { Result } from "./components/Result";
import { CameraModal } from "./components/CameraModal";

const App: React.FC = () => {
  const [permissionResponse, requestPermission] = useCameraPermissions();
  const [scanned, setScanned] = useState<boolean>(false);
  const [data, setData] = useState<string | null>(null);
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  useEffect(() => {
    if (permissionResponse && !permissionResponse.granted) {
      requestPermission();
    }
  }, [permissionResponse]);

  // Se ainda não tivermos a resposta das permissões
  if (!permissionResponse) {
    return (
      <SafeAreaView style={styles.centerContainer}>
        <Text style={styles.infoText}>Solicitando permissão para acessar a câmera...</Text>
      </SafeAreaView>
    );
  }

  // Se o usuário negar as permissões
  if (!permissionResponse.granted) {
    return (
      <SafeAreaView style={styles.centerContainer}>
        <Text style={styles.infoText}>É necessário conceder acesso à câmera para utilizar o scanner.</Text>
        <TouchableOpacity onPress={requestPermission} style={styles.button}>
          <Text style={styles.buttonText}>Permitir acesso</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  // Função acionada ao escanear o QR Code
  const handleBarcodeScanned = ({ type, data }: { type: string; data: string }) => {
    console.log(`Código do tipo ${type} escaneado: ${data}`);
    setModalVisible(false);
    setScanned(true);
    setData(data);
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Header title="Validador de Presença" />
      <View style={styles.content}>
        <Text style={styles.subTitle}>Bem-vindo! Escaneie seu QR Code para validar sua presença.</Text>
        {scanned && <Result data={data} onReset={() => setScanned(false)} />}
        <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.scanButton}>
          <Text style={styles.scanButtonText}>Escanear QR Code</Text>
        </TouchableOpacity>
      </View>
      <CameraModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onBarcodeScanned={scanned ? undefined : handleBarcodeScanned}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#f8f9fa",
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  centerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f9fa",
  },
  infoText: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 10,
    color: "#333",
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  subTitle: {
    fontSize: 18,
    color: "#555",
    textAlign: "center",
    marginBottom: 20,
  },
  scanButton: {
    backgroundColor: "#007bff",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  scanButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default App;
