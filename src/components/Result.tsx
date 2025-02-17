// components/Result.tsx
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface ResultProps {
  data: string | null;
  onReset: () => void;
}

const Result: React.FC<ResultProps> = ({ data, onReset }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.resultText}>Validado!</Text>
      {data && <Text style={styles.dataText}>{data}</Text>}
      <TouchableOpacity onPress={onReset} style={styles.resetButton}>
        <Text style={styles.resetButtonText}>Escanear novamente</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e9ecef",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  resultText: {
    fontSize: 20,
    color: "#28a745",
    fontWeight: "bold",
    marginBottom: 10,
  },
  dataText: {
    fontSize: 16,
    color: "#555",
    marginBottom: 10,
  },
  resetButton: {
    backgroundColor: "#007bff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  resetButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export { Result };
