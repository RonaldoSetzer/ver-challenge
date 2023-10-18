import { selectUserAccount } from "@/store/user-account-slice";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

function ProfileDetailsPage() {
  const { profileId } = useParams();
  const userAccount = useSelector(selectUserAccount)
  const profile = profileId && userAccount?.getProfile(profileId)
  return (
    <>
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
      {profile && profile.persons.length > 0 && (
        <table>
          <tbody>
            <tr>
              <td>Persons</td>
            </tr>
            {profile.persons.map((person) => (
              <tr key={person.id}>
                <td>
                  <Link to={`/profile/${profileId}/person/${person.id}`}>
                    {person.salutation} {person.lastName}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {profile && profile.paymentMethods.length > 0 && (
        <table>
          <tbody>
            <tr>
              <td>Payment Methods</td>
            </tr>
            {profile.paymentMethods.map((payment) => (
              <tr key={payment.id}>
                <td>
                  <Link to={`/profile/${profileId}/payment-method/${payment.id}`}>
                    {payment.name}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table >
      )}
      {
        profile && profile.addresses.length > 0 && (
          <table>
            <tbody>
              <tr>
                <td>Addresses</td>
              </tr>
              {profile.addresses.map((address) => (
                <tr key={address.id}>
                  <td>
                    <Link to={`/profile/${profileId}/address/${address.id}`}>
                      {address.name} {address.street} {address.houseNumber}
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )
      }
    </>
  );
}

export default ProfileDetailsPage;
