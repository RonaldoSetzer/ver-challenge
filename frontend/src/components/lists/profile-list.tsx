import { Link } from "react-router-dom";
import { Profile } from "@/types";
import { Button, Container, List, ListItem, Title } from "../ui";

interface ProfileListProps {
  profiles: Profile[];
  onDeleteProfile: (profileId: string) => void;
}

function ProfileList({ profiles, onDeleteProfile }: ProfileListProps) {
  return (
    <Container>
      <Title>Profiles</Title>
      <List>
        {profiles.map((profile) => (
          <ListItem key={profile.id}>
            <Link to={`/profile/${profile.id}`}>
              {profile.name}
            </Link>
            <Button onClick={() => onDeleteProfile(profile.id)}>remove</Button>
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default ProfileList;
