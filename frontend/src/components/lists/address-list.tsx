import { Link } from "react-router-dom";
import { Address } from "@/types";
import { Container, List, ListItem, Title } from "../ui";

interface AddressListProps {
  profileId: string;
  addresses: Address[];
}

function AddressList({ profileId, addresses }: AddressListProps) {
  return (
    <Container>
      <Title>Addresses</Title>
      <List>
        {addresses.map((address) => (
          <ListItem key={address.id}>
            <Link to={`/profile/${profileId}/address/${address.id}`}>
              {address.name} {address.street} {address.houseNumber}
            </Link>
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default AddressList;
