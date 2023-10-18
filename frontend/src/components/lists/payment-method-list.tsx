import { Link } from "react-router-dom";
import { PaymentMethod } from "@/types";
import { Container, List, ListItem, Title } from "../ui";

interface PaymentMethodListProps {
  profileId: string;
  paymentMethods: PaymentMethod[];
}

function PaymentMethodList({ profileId, paymentMethods }: PaymentMethodListProps) {
  return (
    <Container>
      <Title>Payment Methods</Title>
      <List>
        {paymentMethods.map((payment) => (
          <ListItem key={payment.id}>
            <Link to={`/profile/${profileId}/payment-method/${payment.id}`}>
              {payment.name}
            </Link>
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default PaymentMethodList;
