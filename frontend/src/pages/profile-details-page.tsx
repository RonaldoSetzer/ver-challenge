import { useParams } from "react-router-dom";
import { Main } from "@/components/ui";
import UserAccountDetails from "@/components/details/user-account-details";
import PersonList from "@/components/lists/person-list";
import PaymentMethodList from "@/components/lists/payment-method-list";
import AddressList from "@/components/lists/address-list";
import UseUserAccount from "@/hooks/use-user-account";

function ProfileDetailsPage() {
  const { profileId } = useParams();
  const { userAccount, formattedTime, isLoading } = UseUserAccount();
  const profile = profileId && userAccount?.getProfile(profileId);
  const { persons, paymentMethods, addresses } = profile || { persons: [], paymentMethods: [], addresses: [] };

  return (
    <Main>
      {userAccount && <UserAccountDetails userAccount={userAccount} />}
      {profile &&
        <>
          <PersonList profileId={profileId} persons={persons} />
          <PaymentMethodList profileId={profileId} paymentMethods={paymentMethods} />
          <AddressList profileId={profileId} addresses={addresses} />
        </>
      }
      <p>{isLoading ? `Loading ...` : `Loaded: `}{formattedTime}</p>
    </Main>
  );
}

export default ProfileDetailsPage;
