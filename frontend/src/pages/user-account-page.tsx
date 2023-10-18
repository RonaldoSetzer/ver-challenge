import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDeleteProfileMutation, useGetUserAccountQuery } from "@/store/api";
import { selectUserAccount } from "@/store/user-account-slice";
import { Main } from "@/components/ui";
import UserAccountDetails from "@/components/details/user-account-details";
import ProfileList from "@/components/lists/profile-list";

function UserAccountPage() {
  const { isLoading } = useGetUserAccountQuery()
  const [timer, setTimer] = useState(0)
  const userAccount = useSelector(selectUserAccount)
  const [deleteProfile, response] = useDeleteProfileMutation()
  const { profiles } = userAccount || { profiles: [] }

  useEffect(() => {
    if (response.isSuccess) {
      console.log("Profile deleted")
    }
  }, [response])

  useEffect(() => {
    if (isLoading) {
      const interval = setInterval(() => {
        setTimer((timer) => timer + 1)
      }, 100)
      return () => clearInterval(interval)
    }
  }, [isLoading])

  return (
    <Main>
      {isLoading && <p>Loading...</p>}
      {userAccount && (
        <>
          <UserAccountDetails userAccount={userAccount} />
          <ProfileList
            profiles={profiles}
            onDeleteProfile={(profileId) => deleteProfile(profileId)}
          />
        </>
      )}
      <p>Loaded in {timer} milliseconds</p>
    </Main>
  );
}

export default UserAccountPage;

