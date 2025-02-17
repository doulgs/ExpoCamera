// components/CameraModal.tsx
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Modal } from "react-native";
import { CameraView } from "expo-camera";

interface CameraModalProps {
  visible: boolean;
  onClose: () => void;
  onBarcodeScanned?: ({ type, data }: { type: string; data: string }) => void;
}

const CameraModal: React.FC<CameraModalProps> = ({ visible, onClose, onBarcodeScanned }) => {
  return (
    <Modal animationType="slide" transparent={false} visible={visible} onRequestClose={onClose}>
      <View style={styles.fullModalContainer}>
        <View style={styles.modalHeader}>
          <TouchableOpacity onPress={onClose}>
            <Text style={styles.modalClose}>Fechar</Text>
          </TouchableOpacity>
          <Text style={styles.modalTitle}>Escaneie o QR Code</Text>
          <View style={{ width: 60 }} />
        </View>
        <View style={styles.fullCameraContainer}>
          <CameraView onBarcodeScanned={onBarcodeScanned} style={styles.fullCamera} ratio="16:9" />
          {/* Overlay para centralizar a área de leitura */}
          <View style={styles.fullOverlay}>
            <View style={styles.overlayBackground} />
            <View style={styles.overlayTop} />
            <View style={styles.overlayMiddle}>
              <View style={styles.overlaySide} />
              <View style={styles.overlayCenter} />
              <View style={styles.overlaySide} />
            </View>
            <View style={styles.overlayBottom} />
            <View style={styles.scannerFrame} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  fullModalContainer: {
    flex: 1,
    backgroundColor: "#000",
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 40,
    paddingHorizontal: 20,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    paddingBottom: 10,
  },
  modalTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  modalClose: {
    color: "#fff",
    fontSize: 16,
  },
  fullCameraContainer: {
    flex: 1,
    position: "relative",
  },
  fullCamera: {
    flex: 1,
  },
  fullOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  overlayBackground: {
    ...StyleSheet.absoluteFillObject,
  },
  overlayTop: {
    flex: 1,
    width: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  overlayMiddle: {
    flexDirection: "row",
  },
  overlaySide: {
    width: "15%",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  overlayCenter: {
    width: "70%",
    aspectRatio: 1,
    backgroundColor: "transparent",
  },
  overlayBottom: {
    flex: 1,
    width: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  scannerFrame: {
    position: "absolute",
    width: "70%",
    aspectRatio: 1,
    borderWidth: 3,
    borderColor: "#00FF00",
    borderRadius: 10,
  },
});

export { CameraModal };
