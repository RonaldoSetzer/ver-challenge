import { Link } from "react-router-dom";
import { PaymentMethod } from "@/types";
import { Container, List, ListItem, Tag, Title } from "../ui";

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
            {payment.isPrimary && <Tag>Primary</Tag>}
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default PaymentMethodList;
