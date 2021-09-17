function Modal(props) {
  if (!props.userData) {
    return <h3>No data yet!</h3>;
  }
  return (
    <div className="modal">
      <ul>
        {props.userData.map((el, index) => {
          <li key={index}>Timepoint- {el.timepoint}</li>;
          <li key={index}>Cloudcover- {el.cloudcover}</li>;
          <li key={index}>Seeing- {el.seeing}</li>;
          <li key={index}>Lifted_index- {el.lifted_index}</li>;
          <li key={index}>Transparency- {el.transparency}</li>;
        })}
      </ul>
    </div>
  );
}
export default Modal;
