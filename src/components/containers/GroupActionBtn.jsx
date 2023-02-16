import CustomBtn from "../components/CustomBtn";

const GroupActionBtn = ({ value, onCLick }) => {
  return (
    <div>
      <CustomBtn
        value="test1"
        onCLick={() => {
          alert("test1");
        }}
      ></CustomBtn>
      <CustomBtn
        value="test2"
        onCLick={() => {
          alert("test2");
        }}
      ></CustomBtn>
      <CustomBtn
        value="test3"
        onCLick={() => {
          alert("test3");
        }}
      ></CustomBtn>
    </div>
  );
};

export default GroupActionBtn;
