import { View, Text, ScrollView, StyleSheet } from 'vite';

export default function Conteudo({ alunos }) {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.inner}>
      <Text style={styles.titulo}>A Equipe</Text>
      {alunos.map((aluno, index) => (
        <View key={aluno.id} style={styles.item}>
          <Text style={styles.numero}>{String(index + 1).padStart(2, '0')}</Text>
          <View style={styles.info}>
            <Text style={styles.nome}>{aluno.nome}</Text>
            <Text style={styles.descricao}>{aluno.descricao}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    padding: 20,
    gap: 12,
  },
  titulo: {
    color: '#00ff88',
    fontSize: 22,
    fontWeight: '800',
    fontFamily: 'monospace',
    marginBottom: 8,
  },
  item: {
    flexDirection: 'row',
    gap: 16,
    backgroundColor: '#141414',
    borderRadius: 8,
    padding: 16,
    alignItems: 'flex-start',
  },
  numero: {
    color: '#00ff8860',
    fontSize: 20,
    fontFamily: 'monospace',
    fontWeight: '800',
  },
  info: {
    flex: 1,
    gap: 4,
  },
  nome: {
    color: '#e0e0e0',
    fontSize: 15,
    fontWeight: '700',
    fontFamily: 'monospace',
  },
  descricao: {
    color: '#777',
    fontSize: 13,
    fontFamily: 'monospace',
    lineHeight: 18,
  },
});
