import { useDeleteProfileMutation } from "@/store/api";
import { Main } from "@/components/ui";
import UserAccountDetails from "@/components/details/user-account-details";
import ProfileList from "@/components/lists/profile-list";
import UseUserAccount from "@/hooks/use-user-account";

function UserAccountPage() {
  const { userAccount, formattedTime, isLoading } = UseUserAccount();
  const [deleteProfile] = useDeleteProfileMutation()
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

