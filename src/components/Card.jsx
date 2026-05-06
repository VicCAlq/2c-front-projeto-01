import { View, Text, ScrollView, StyleSheet } from 'vite';

const categorias = {
  facil: { label: ' Muito Fácil', cor: '#00f545' },
  dificil: { label: ' Muito Difícil', cor: '#ff0a0a' },
  ajudou: { label: ' Me Ajudou Muito', cor: '#00fffb' },
  naoAjudou: { label: ' Não Me Ajudou', cor: '#a6814d' },
};

export default function Card({ conteudo }) {
  if (!conteudo) return null;

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.inner}>
      {Object.entries(categorias).map(([chave, { label, cor }]) => {
        const item = conteudo[chave];
        if (!item) return null;

        return (
          <View key={chave} style={[styles.card, { borderLeftColor: cor }]}>
            <Text style={[styles.categoria, { color: cor }]}>{label}</Text>
            <Text style={styles.questao}>{item.titulo}</Text>
            <View style={styles.codeBox}>
              <Text style={styles.codigo}>{item.codigo}</Text>
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    padding: 20,
    gap: 16,
  },
  card: {
    backgroundColor: '#141414',
    borderRadius: 8,
    borderLeftWidth: 3,
    padding: 16,
    gap: 8,
  },
  categoria: {
    fontSize: 11,
    fontFamily: 'monospace',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  questao: {
    color: '#e0e0e0',
    fontSize: 14,
    fontWeight: '600',
    fontFamily: 'monospace',
  },
  codeBox: {
    backgroundColor: '#0a0a0a',
    borderRadius: 4,
    padding: 12,
    marginTop: 4,
  },
  codigo: {
    color: '#aaa',
    fontSize: 12,
    fontFamily: 'monospace',
    lineHeight: 18,
  },
});
