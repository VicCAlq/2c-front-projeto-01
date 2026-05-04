import { View, Text, TouchableOpacity, Linking, StyleSheet } from 'react-native';

export default function Rodape() {
  const urlRepositorio = 'https://github.com/SEU-USUARIO/SEU-REPOSITORIO';

  return (
    <View style={styles.rodape}>
      <TouchableOpacity onPress={() => Linking.openURL(urlRepositorio)}>
        <Text style={styles.link}>🔗 Repositório no GitHub</Text>
      </TouchableOpacity>
      <Text style={styles.creditos}>Criado por: [nomes dos alunos]</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  rodape: {
    backgroundColor: '#0f0f0f',
    borderTopWidth: 1,
    borderTopColor: '#1a1a1a',
    paddingVertical: 16,
    paddingHorizontal: 20,
    alignItems: 'center',
    gap: 6,
  },
  link: {
    color: '#00ff88',
    fontSize: 13,
    fontFamily: 'monospace',
    textDecorationLine: 'underline',
  },
  creditos: {
    color: '#555',
    fontSize: 12,
    fontFamily: 'monospace',
  },
});
