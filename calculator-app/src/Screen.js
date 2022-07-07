const Screen = ({active,inactive,operation}) => {

  return (
    <div className="screen">
      <div className="storage">{inactive}{operation}</div>
      <div className="result">{active}</div>
    </div>
  );
}

export default Screen;
