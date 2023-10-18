import { Link } from "react-router-dom";
import { Person } from "@/types";
import { Container, List, ListItem, Title } from "../ui";

interface PersonListProps {
  profileId: string;
  persons: Person[];
}

function PersonList({ profileId, persons }: PersonListProps) {
  return (
    <Container>
      <Title>Persons</Title>
      <List>
        {persons.map((person) => (
          <ListItem key={person.id}>
            <Link to={`/profile/${profileId}/person/${person.id}`}>
              {person.salutation} {person.lastName}
            </Link>
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default PersonList;
