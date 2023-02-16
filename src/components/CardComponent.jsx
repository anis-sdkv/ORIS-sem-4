import { Card } from "antd";

const { Meta } = Card;

const CardComponent = ({ weight }) => {
  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={
        <img
          alt="example"
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        />
      }
    >
      <Meta title="weight" description="www.instagram.com" />
    </Card>
  );
};

export default CardComponent;
