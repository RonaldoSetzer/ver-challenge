import { useState } from "react";
import { Link } from "react-router-dom";
import { Profile } from "@/types";
import { Button, ListItem } from "../ui";

interface ProfileListItemProps {
  profile: Profile;
  onDeleteProfile: (profileId: string) => void;
}

function ProfileListItem({ profile, onDeleteProfile }: ProfileListItemProps) {
  const [isDeleting, setIsDeleting] = useState(false)
  const { id, name } = profile

  function handleDeleteProfile() {
    setIsDeleting(true)
    onDeleteProfile(id)
  }

  return (
    <ListItem key={id}>
      {isDeleting
        ? <p>Deleting ...</p>
        : <>
          <Link to={`/profile/${id}`}> {name} </Link>
          <Button onClick={handleDeleteProfile}>remove</Button>
        </>
      }

    </ListItem>)
}

export default ProfileListItem;
