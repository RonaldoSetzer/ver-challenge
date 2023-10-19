import { Person } from "@/types";
import { Container, List, ListItem, Tag, Title } from "../ui";

interface PersonDetailsProps {
  person: Person;
}

function PersonDetails({ person }: PersonDetailsProps) {
  return (
    <Container>
      <Title>Person Details {person.isPrimary && <Tag>Primary</Tag>}</Title>
      <List>
        <ListItem>
          <label>Name</label>
          <span>{person.salutation} {person.firstName} {person.lastName} </span>
        </ListItem>
        <ListItem>
          <label>Occupation</label>
          <span>{person.occupation}</span>
        </ListItem>
        <ListItem>
          <label>Marital Status</label>
          <span>{person.maritalStatus}</span>
        </ListItem>
      </List>
    </Container>
  );
}

export default PersonDetails;
