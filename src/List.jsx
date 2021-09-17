let List = (props) => {
  if (!props.data) {
    return <h3>No data yet!</h3>;
  }
  return (
    <div className="list">
      <ul>
        {props.data.map((el, index) => {
          <li key={index}>Timepoint- {el.timepoint}</li>;
        })}
      </ul>
    </div>
  );
};
export default List;
