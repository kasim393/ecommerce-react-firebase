import "./blackbtn.css";

const BlackBtn = ({ text, isLoading }) => {
  return (
    <>
      <button className="blackbtn" disabled={isLoading}>
        {text}
      </button>
    </>
  );
};
export default BlackBtn;
