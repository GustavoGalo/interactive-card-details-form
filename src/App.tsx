import { useAppSelector } from './App/hooks';
import { Card, CardForm } from './components';
import { GridContainer } from './styles';

function App() {
  const card = useAppSelector((state) => state.card);

  return (
    <GridContainer>
      <Card card={card} />
      <CardForm card={card} />
    </GridContainer>
  );
}

export default App;
