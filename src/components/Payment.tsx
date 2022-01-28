import { Row, Col, Divider, Card } from "antd";

import Countdown from "antd/lib/statistic/Countdown";
const { Meta } = Card;

type PaymentProps = {
  onPay: () => void;
};

export const Payment = ({ onPay }: PaymentProps) => {
  const deadline = Date.now() + 1000000;

  return (
    <Row>
      <Col>
        <Countdown title="Time to payment expire" value={deadline} />
        <Divider />
        <Row gutter={16}>
          <Col>
            <Card
              onClick={onPay}
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src="money.png" />}
            >
              <Meta title="Money" description="The classic way" />
            </Card>
          </Col>

          <Col>
            <Card
              onClick={onPay}
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src="card.png" />}
            >
              <Meta title="Card" description="Secure payment" />
            </Card>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
