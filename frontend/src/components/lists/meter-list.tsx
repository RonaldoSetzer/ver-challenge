import { Meter } from "@/types";
import { Container, List, ListItem, Title } from "../ui";

interface MeterListProps {
  meters: Meter[];
}

function MeterList({ meters }: MeterListProps) {
  return (
    <Container>
      <Title>Meters</Title>
      <List>
        {meters.map((meter) => (
          <ListItem key={meter.id}>
            {meter.name}
          </ListItem>
        ))}
      </List>
    </Container>
  )
}
export default MeterList;
