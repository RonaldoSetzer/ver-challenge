import { useEffect } from "react";
import { useDeleteProfileMutation, useGetUserAccountQuery } from "@/store/api";
import { selectUserAccount } from "@/store/user-account-slice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


function UserAccountPage() {
  const { isLoading } = useGetUserAccountQuery()
  const userAccount = useSelector(selectUserAccount)
  const [deleteProfile, response] = useDeleteProfileMutation()

  useEffect(() => {
    if (response.isSuccess) {
      console.log("Profile deleted")
    }
  }, [response])


  return (
    <>
      {isLoading && <p>Loading...</p>}
      {userAccount && (
        <table>
          <tbody>
            <tr>
              <td>email</td>
              <td>{userAccount.email}</td>
            </tr>
            <tr>
              <td>Profiles</td>
              <td>{userAccount.numProfiles()}</td>
            </tr>
            <tr>
              <td>Payment Methods</td>
              <td>{userAccount.numPaymentMethods()}</td>
            </tr>
            <tr>
              <td>Persons</td>
              <td>{userAccount.numPersons()}</td>
            </tr>
            <tr>
              <td>Addresses</td>
              <td>{userAccount.numAddresses()}</td>
            </tr>
            <tr>
              <td>Meters</td>
              <td>{userAccount.numMeters()}</td>
            </tr>
          </tbody>
        </table>
      )}
      {userAccount && userAccount.profiles.length > 0 && (
        <table>
          <tbody>
            <tr>
              <td>Profiles</td>
              <td />
            </tr>
            {userAccount.profiles.map((profile) => (
              <tr key={profile.id}>
                <td>
                  <Link to={`profile/${profile.id}`}>
                    {profile.name}
                  </Link>
                </td>
                <td>
                  <button onClick={() => deleteProfile(profile.id)}>remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}

export default UserAccountPage;

