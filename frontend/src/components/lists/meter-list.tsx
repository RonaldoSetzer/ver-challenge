import { Container, List, ListItem, Tag, Title } from "../ui";

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
              {meter.name} {meter.isPrimary && <Tag>Primary</Tag>}
          </ListItem>
        ))}
      </List>
    </Container>

    )
}
export default MeterList;
