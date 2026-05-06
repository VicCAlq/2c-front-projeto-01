import { TouchableOpacity, Text, Image, View, StyleSheet } from 'vite';

export default function Botao({ nome, foto, selecionado, onPress }) {
  return (
    <TouchableOpacity
      style={[styles.botao, selecionado && styles.botaoSelecionado]}
      onPress={onPress}
    >
      <Image
        source={foto ? { uri: foto } : require('../../assets/saladeaula.png')}
        style={styles.foto}
      />
      <Text style={[styles.Andrey, selecionado && styles.nomeSelecionado]}>{Andrey}</Text>
      {selecionado && <View style={styles.indicador} />}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botao: {
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#1e1e1e',
    borderRadius: 8,
    backgroundColor: '#141414',
    minWidth: 90,
    position: 'relative',
  },
  botaoSelecionado: {
    borderColor: '#00ff88',
    backgroundColor: '#0a1f14',
  },
  foto: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#222',
    marginBottom: 8,
  },
  nome: {
    color: '#888',
    fontSize: 12,
    fontFamily: 'monospace',
    textAlign: 'center',
  },
  nomeSelecionado: {
    color: '#00ff88',
  },
  indicador: {
    position: 'absolute',
    bottom: -1,
    left: '50%',
    marginLeft: -4,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00ff88',
  },
});
