import { Route, Routes as RoutesDom } from "react-router-dom"
import AddressDetailsPage from "@/pages/address-details-page"
import PaymentMethodDetailsPage from "@/pages/payment-method-details-page"
import PersonDetailsPage from "@/pages/person-details-page"
import ProfileDetailsPage from "@/pages/profile-details-page"
import UserAccountPage from "@/pages/user-account-page"

function Routes() {
  return (
    <RoutesDom>
      <Route path="/" element={<UserAccountPage />} />
      <Route path="/profile/:profileId" element={<ProfileDetailsPage />} />
      <Route path="/profile/:profileId/person/:personId" element={<PersonDetailsPage />} />
      <Route path="/profile/:profileId/payment-method/:paymentId" element={<PaymentMethodDetailsPage />} />
      <Route path="profile/:profileId/address/:addressId" element={<AddressDetailsPage />} />
    </RoutesDom>
  )
}

export default Routes
