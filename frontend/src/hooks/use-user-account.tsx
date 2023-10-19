import api from "@/store/api";
import { selectUserAccount } from "@/store/user-account-slice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useLoadingTimer from "./use-loading-timer";

function UseUserAccount() {
  const [isLoading, setIsLoading] = useState(false);
  const { formattedTime } = useLoadingTimer(isLoading)
  const userAccount = useSelector(selectUserAccount);
  const dispatcher = useDispatch();

  useEffect(() => {
    if (!userAccount) {
      dispatcher(api.endpoints.getUserAccount.initiate() as any);
      setIsLoading(true);
    }
    if (isLoading && userAccount) {
      setIsLoading(false);
    }
  }, [userAccount, dispatcher]);
  return { userAccount, isLoading, formattedTime };
}
export default UseUserAccount;
