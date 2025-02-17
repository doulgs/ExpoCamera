// components/WebViewModal.tsx
import React from "react";
import { Modal, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

interface WebViewModalProps {
  visible: boolean;
  url: string;
  onClose: () => void;
}

const WebViewModal: React.FC<WebViewModalProps> = ({ visible, url, onClose }) => {
  return (
    <Modal animationType="slide" transparent={false} visible={visible} onRequestClose={onClose}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onClose}>
          <Text style={styles.closeButton}>Fechar</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Visualização</Text>
        <View style={{ width: 60 }} />
      </View>
      <WebView source={{ uri: url }} style={styles.webview} />
    </Modal>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: "#007AFF",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  closeButton: {
    color: "#fff",
    fontSize: 16,
  },
  title: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  webview: {
    flex: 1,
  },
});

export { WebViewModal };
