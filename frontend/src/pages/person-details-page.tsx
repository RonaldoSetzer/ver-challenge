import { useParams } from "react-router-dom";
import { Main } from "@/components/ui";
import UserAccountDetails from "@/components/details/user-account-details";
import PersonDetails from "@/components/details/person-details";
import UseUserAccount from "@/hooks/use-user-account";

function PersonDetailsPage() {
  const { profileId, personId } = useParams();
  const { userAccount, formattedTime, isLoading } = UseUserAccount();
  const person = profileId && personId && userAccount?.getPerson(profileId, personId)

  return (
    <Main>
      {userAccount && <UserAccountDetails userAccount={userAccount} />}
      {person && <PersonDetails person={person} />}
      <p>{isLoading ? `Loading ...` : `Loaded: `}{formattedTime}</p>
    </Main>
  );
}

export default PersonDetailsPage
