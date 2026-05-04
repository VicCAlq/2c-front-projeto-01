import { ScrollView, StyleSheet } from 'react-native';
import Botao from './Botao';

export default function Menu({ alunos, alunoSelecionado, setAlunoSelecionado }) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.menu}
    >
      {alunos.map((aluno) => (
        <Botao
          key={aluno.id}
          nome={aluno.nome}
          foto={aluno.foto}
          selecionado={alunoSelecionado?.id === aluno.id}
          onPress={() => setAlunoSelecionado(aluno)}
        />
      ))}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  menu: {
    flexDirection: 'row',
    gap: 12,
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
});
