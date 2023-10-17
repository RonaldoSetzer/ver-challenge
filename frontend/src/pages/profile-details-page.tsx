import { useParams } from "react-router-dom";

function ProfileDetailsPage() {
  const { profileId } = useParams();
  return (
    <div>
      <h1>Profile Details Page</h1>
      <p>Profile ID: {profileId}</p>
    </div>
  );
}

export default ProfileDetailsPage;
