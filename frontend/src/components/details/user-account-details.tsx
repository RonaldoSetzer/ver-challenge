import { UserAccount } from "@/domain/entities/user-account";
import { Container, List, ListItem, Title } from "../ui";

interface UserAccountDetailsProps {
  userAccount: UserAccount;
}

function UserAccountDetails({ userAccount }: UserAccountDetailsProps) {
  return (
    <Container>
      <Title>User Account Details</Title>
      <List>
        <ListItem>
          <label htmlFor="email">Email</label>
          <span>{userAccount.email}</span>
        </ListItem>
        <ListItem>
          <label htmlFor="profiles">Profiles</label>
          <span>{userAccount.numProfiles()}</span>
        </ListItem>
        <ListItem>
          <label htmlFor="payment-methods">Payment Methods</label>
          <span>{userAccount.numPaymentMethods()}</span>
        </ListItem>
        <ListItem>
          <label htmlFor="persons">Persons</label>
          <span>{userAccount.numPersons()}</span>
        </ListItem>
        <ListItem>
          <label htmlFor="addresses">Addresses</label>
          <span>{userAccount.numAddresses()}</span>
        </ListItem>
        <ListItem>
          <label htmlFor="meters">Meters</label>
          <span>{userAccount.numMeters()}</span>
        </ListItem>
      </List>
    </Container>
  );
}

export default UserAccountDetails;
