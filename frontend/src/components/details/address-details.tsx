import { Address } from "@/types";
import { Container, List, ListItem, Tag, Title } from "../ui";

interface AddressDetailsProps {
  address: Address;
}

function AddressDetails({ address }: AddressDetailsProps) {
  return (
    <Container>
      <Title>Address Details</Title>
      <List>
        {address.isPrimaryBilling || address.isPrimaryShipping || address.isPrimaryMailing &&
          <div>
            {address.isPrimaryBilling && <Tag>Primary Billing</Tag>}
            {address.isPrimaryShipping && <Tag>Primary Shipping</Tag>}
            {address.isPrimaryMailing && <Tag>Primary Mailing</Tag>}
          </div>
        }
        <ListItem>
          <label>name</label>
          <span>{address.name} {address.isPrimaryBilling}</span>
        </ListItem>
        <ListItem>
          <label>postal code</label>
          <span>{address.postalCode} {address.city}</span>
        </ListItem>
        <ListItem>
          <label>street</label>
          <span>{address.street} {address.houseNumber}</span>
        </ListItem>
        <ListItem>
          <label>meters</label>
          <span>{address.meters.length}</span>
        </ListItem>
      </List>
    </Container>
  );
}

export default AddressDetails;
