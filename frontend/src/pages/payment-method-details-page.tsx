import { useParams } from "react-router-dom";
import { Main } from "@/components/ui";
import UserAccountDetails from "@/components/details/user-account-details";
import PaymentMethodDetails from "@/components/details/payment-method-details";
import UseUserAccount from "@/hooks/use-user-account";

function PaymentMethodDetailsPage() {
  const { profileId, paymentId } = useParams();
  const { userAccount, formattedTime, isLoading } = UseUserAccount();
  const payment = profileId && paymentId && userAccount?.getPaymentMethod(profileId, paymentId)

  return (
    <Main>
      {userAccount && <UserAccountDetails userAccount={userAccount} />}
      {payment && <PaymentMethodDetails paymentMethod={payment} />}
      <p>{isLoading ? `Loading ...` : `Loaded: `}{formattedTime}</p>
    </Main>
  );
}

export default PaymentMethodDetailsPage;
