import { selectUserAccount } from "@/store/user-account-slice";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function AddressDetailsPage() {
  const { profileId, addressId } = useParams();
  const userAccount = useSelector(selectUserAccount)
  const address = profileId && addressId && userAccount?.getAddress(profileId, addressId)
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
      {address && (
        <table>
          <tbody>
            <tr>
              <td>name</td>
              <td>{address.name} {address.isPrimaryBilling}</td>
            </tr>
            <tr>
              <td>postal code</td>
              <td>{address.postalCode} {address.city}</td>
            </tr>
            <tr>
              <td>street</td>
              <td>{address.street} {address.houseNumber}</td>
            </tr>
            <tr>
              <td>meters</td>
              <td>{address.meters.length}</td>
            </tr>
          </tbody>
        </table>
      )}
    </>
  );
}

export default AddressDetailsPage;
