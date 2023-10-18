import { PaymentMethod } from "@/types";
import { Container, List, ListItem, Title } from "../ui";

interface PaymentMethodDetailsProps {
  paymentMethod: PaymentMethod;
}

function PaymentMethodDetails({ paymentMethod }: PaymentMethodDetailsProps) {
  return (
    <Container>
      <Title>Payment Method Details</Title>
      <List>
        <ListItem>
          <label>name</label>
          <span>{paymentMethod.name}</span>
        </ListItem>
        <ListItem>
          <label>iban</label>
          <span>{paymentMethod.iban}</span>
        </ListItem>
        <ListItem>
          <label>bic</label>
          <span>{paymentMethod.bic}</span>
        </ListItem>
      </List>
    </Container>
  );
}

export default PaymentMethodDetails;
