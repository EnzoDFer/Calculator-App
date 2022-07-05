import { useState } from "react";

const Screen = ({activePhrase}) => {
  //const [activePhrase,setActivePhrase] = useState('');

  return (
    <div className="screen">
      <div className="storage">Previous Number</div>
      <div className="result">{activePhrase}</div>
    </div>
  );
}

export default Screen;
