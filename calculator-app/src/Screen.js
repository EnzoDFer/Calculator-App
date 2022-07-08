const Screen = ({active,inactive,operationSymbol}) => {

  return (
    <div className="screen">
      <div className="storage">{inactive} {operationSymbol}</div>
      <div className="result">{active}</div>
    </div>
  );
}

export default Screen;
