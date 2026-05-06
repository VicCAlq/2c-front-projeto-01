import { View, Text, TouchableOpacity, StyleSheet } from 'vite';

export default function Cabecalho({ paginaAtual, setPagina }) {
  return (
    <View style={styles.cabecalho}>
      <Text style={styles.titulo}>{'</>'} Vitrine de Códigos</Text>
      <View style={styles.nav}>
        <TouchableOpacity
          style={[styles.botaoNav, paginaAtual === 'principal' && styles.botaoNavAtivo]}
          onPress={() => setPagina('principal')}
        >
          <Text style={[styles.textoBotaoNav, paginaAtual === 'principal' && styles.textoAtivo]}>
            Início
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.botaoNav, paginaAtual === 'sobre' && styles.botaoNavAtivo]}
          onPress={() => setPagina('sobre')}
        >
          <Text style={[styles.textoBotaoNav, paginaAtual === 'sobre' && styles.textoAtivo]}>
            Sobre a Equipe
          </Text>
          
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cabecalho: {
    backgroundColor: '#0f0f0f',
    paddingTop: 48,
    paddingBottom: 16,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#00ff88',
  },
  titulo: {
    color: '#00ff88',
    fontSize: 20,
    fontWeight: '800',
    letterSpacing: 1,
    marginBottom: 12,
    fontFamily: 'monospace',
  },
  nav: {
    flexDirection: 'row',
    gap: 12,
  },
  botaoNav: {
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 4,
  },
  botaoNavAtivo: {
    borderColor: '#00ff88',
    backgroundColor: '#00ff8820',
  },
  textoBotaoNav: {
    color: '#888',
    fontSize: 13,
    fontFamily: 'monospace',
  },
  textoAtivo: {
    color: '#00ff88',
  },
});
