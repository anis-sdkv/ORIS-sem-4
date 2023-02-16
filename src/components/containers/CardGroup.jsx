import CardComponent from "../components/CardComponent";

const CardGroup = ({ args }) => {
  return div(
    args.array.forEach((element) => {
      CardComponent(element);
    })
  );
};

export default CardGroup;
