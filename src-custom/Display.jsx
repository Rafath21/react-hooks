let Display = (props) => {
  return (
    <div className={`display ${props.theme}`}>
      <p>Name:{props.name}</p>
      <p>Email:{props.email}</p>
      <p>Phone:{props.number}</p>
    </div>
  );
};
export default Display;
