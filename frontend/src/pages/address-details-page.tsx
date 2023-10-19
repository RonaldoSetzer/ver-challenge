import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectUserAccount } from "@/store/user-account-slice";
import { Main } from "@/components/ui";
import UserAccountDetails from "@/components/details/user-account-details";
import AddressDetails from "@/components/details/address-details";
import MeterList from "@/components/lists/meter-list";

function AddressDetailsPage() {
  const { profileId, addressId } = useParams();
  const userAccount = useSelector(selectUserAccount)
  const address = profileId && addressId && userAccount?.getAddress(profileId, addressId)
  const meters = address && address.meters

  return (
    <Main>
      {userAccount && <UserAccountDetails userAccount={userAccount} />}
      {address && <AddressDetails address={address} />}
      {meters && <MeterList meters={meters} />}
    </Main>
  );
}

export default AddressDetailsPage;
