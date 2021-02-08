import IconHistory from '../components/IconHistory';
import Container from '../components/Container';
import Header from '../components/Header';
import TableItem from '../components/Table/Item';
import Input from '../components/Input';

export default function Home() {
  return (
    <Container>
      <Header>
        <IconHistory />
        <h1>Histórico</h1>
        <p>Veja os históricos.</p>
      </Header>

      <Input placeholder="Filtrar ✍" />

      <TableItem />
    </Container>
  );
}
