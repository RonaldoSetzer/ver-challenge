import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectUserAccount } from "@/store/user-account-slice";
import { Main } from "@/components/ui";
import UserAccountDetails from "@/components/details/user-account-details";
import PersonDetails from "@/components/details/person-details";

function PersonDetailsPage() {
  const { profileId, personId } = useParams();
  const userAccount = useSelector(selectUserAccount)
  const person = profileId && personId && userAccount?.getPerson(profileId, personId)

  return (
    <Main>
      {userAccount && <UserAccountDetails userAccount={userAccount} />}
      {person && <PersonDetails person={person} />}
    </Main>
  );
}

export default PersonDetailsPage
