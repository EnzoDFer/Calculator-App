const OperationButton = ({onClick,operation}) => {
  return (
    <button onClick={onClick}>{operation}</button>
  );
}

export default OperationButton;
