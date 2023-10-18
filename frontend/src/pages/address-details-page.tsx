import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectUserAccount } from "@/store/user-account-slice";
import { Main } from "@/components/ui";
import UserAccountDetails from "@/components/details/user-account-details";
import AddressDetails from "@/components/details/address-details";

function AddressDetailsPage() {
  const { profileId, addressId } = useParams();
  const userAccount = useSelector(selectUserAccount)
  const address = profileId && addressId && userAccount?.getAddress(profileId, addressId)

  return (
    <Main>
      {userAccount && <UserAccountDetails userAccount={userAccount} />}
      {address && <AddressDetails address={address} />}
    </Main>
  );
}

export default AddressDetailsPage;
