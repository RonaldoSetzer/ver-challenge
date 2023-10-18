import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectUserAccount } from "@/store/user-account-slice";
import { Main } from "@/components/ui";
import UserAccountDetails from "@/components/details/user-account-details";
import PaymentMethodDetails from "@/components/details/payment-method-details";

function PaymentMethodDetailsPage() {
  const { profileId, paymentId } = useParams();
  const userAccount = useSelector(selectUserAccount)
  const payment = profileId && paymentId && userAccount?.getPaymentMethod(profileId, paymentId)

  return (
    <Main>
      {userAccount && <UserAccountDetails userAccount={userAccount} />}
      {payment && <PaymentMethodDetails paymentMethod={payment} />}
    </Main>
  );
}

export default PaymentMethodDetailsPage;
