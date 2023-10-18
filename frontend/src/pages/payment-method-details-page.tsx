import { selectUserAccount } from "@/store/user-account-slice";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function PaymentMethodDetailsPage() {
  const { profileId, paymentId } = useParams();
  const userAccount = useSelector(selectUserAccount)
  const payment = profileId && paymentId && userAccount?.getPaymentMethod(profileId, paymentId)
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
      {payment && (
        <table>
          <tbody>
            <tr>
              <td>name</td>
              <td>{payment.name}</td>
            </tr>
            <tr>
              <td>iban</td>
              <td>{payment.iban}</td>
            </tr>
            <tr>
              <td>bic</td>
              <td>{payment.bic}</td>
            </tr>
          </tbody>
        </table>
      )}
    </>
  );
}

export default PaymentMethodDetailsPage;
