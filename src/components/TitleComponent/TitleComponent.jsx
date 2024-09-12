import "./TitleComponent.css";

const TitleComponent = ({ title, text }) => {
  return (
    <div className="text-center">
      <h2 className="fw-bold under-line-style my-5 text-color-gray">{title}</h2>
      <p className="mb-5 text-color-gray">{text}</p>
    </div>
  );
};

export default TitleComponent;
