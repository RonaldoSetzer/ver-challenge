import { selectUserAccount } from "@/store/user-account-slice";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function PersonDetailsPage() {
  const { profileId, personId } = useParams();
  const userAccount = useSelector(selectUserAccount)
  const person = profileId && personId && userAccount?.getPerson(profileId, personId)
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
      {person && (
        <table>
          <tbody>
            <tr>
              <td>name</td>
              <td>{person.salutation} {person.firstName} {person.lastName} {person.isPrimary}</td>
            </tr>
            <tr>
              <td>occupation</td>
              <td>{person.occupation}</td>
            </tr>
            <tr>
              <td>Marital Status</td>
              <td>{person.maritalStatus}</td>
            </tr>
          </tbody>
        </table>
      )}
    </>
  );
}

export default PersonDetailsPage
