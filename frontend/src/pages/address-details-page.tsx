import { useParams } from "react-router-dom";
import { Main } from "@/components/ui";
import UserAccountDetails from "@/components/details/user-account-details";
import AddressDetails from "@/components/details/address-details";
import MeterList from "@/components/lists/meter-list";
import UseUserAccount from "@/hooks/use-user-account";

function AddressDetailsPage() {
  const { profileId, addressId } = useParams();
  const { userAccount, formattedTime, isLoading } = UseUserAccount();
  const address = profileId && addressId && userAccount?.getAddress(profileId, addressId)
  const meters = address && address.meters

  return (
    <Main>
      {userAccount && <UserAccountDetails userAccount={userAccount} />}
      {address && <AddressDetails address={address} />}
      {meters && <MeterList meters={meters} />}
      <p>{isLoading ? `Loading ...` : `Loaded: `}{formattedTime}</p>
    </Main>
  );
}

export default AddressDetailsPage;
