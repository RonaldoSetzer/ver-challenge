import { Profile } from "@/types";
import { Container, List, Title } from "../ui";
import ProfileListItem from "./profile-list-item";

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
          <ProfileListItem key={profile.id} profile={profile} onDeleteProfile={onDeleteProfile} />
        ))}
      </List>
    </Container>
  );
}

export default ProfileList;
