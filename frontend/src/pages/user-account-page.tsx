import { useSelector } from "react-redux";
import { useDeleteProfileMutation, useGetUserAccountQuery } from "@/store/api";
import { selectUserAccount } from "@/store/user-account-slice";
import { Main } from "@/components/ui";
import UserAccountDetails from "@/components/details/user-account-details";
import ProfileList from "@/components/lists/profile-list";
import useLoadingTimer from "@/hooks/use-loading-timer";

function UserAccountPage() {
  const userAccount = useSelector(selectUserAccount)
  const { isLoading } = useGetUserAccountQuery()
  const [ deleteProfile ] = useDeleteProfileMutation()
  const { formattedTime } = useLoadingTimer(isLoading)
  const { profiles } = userAccount || { profiles: [] }

  return (
    <Main>
      {userAccount && (
        <>
          <UserAccountDetails userAccount={userAccount} />
          <ProfileList
            profiles={profiles}
            onDeleteProfile={(profileId) => deleteProfile(profileId)}
          />
        </>
      )}
      <p>{isLoading ? `Loading ...` : `Loaded: `}{formattedTime}</p>
    </Main>
  );
}

export default UserAccountPage;

