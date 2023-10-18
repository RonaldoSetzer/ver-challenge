import { Person } from "@/types";
import { Container, List, ListItem, Title } from "../ui";

interface PersonDetailsProps {
  person: Person;
}

function PersonDetails({ person }: PersonDetailsProps) {
  return (
    <Container>
      <Title>Person Details</Title>
      <List>
        <ListItem>
          <label>Name</label>
          <span>{person.salutation} {person.firstName} {person.lastName} {person.isPrimary}</span>
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
