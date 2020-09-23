import React, {useState, useCallback} from 'react'
import List from './List';

const TesteUseCallback = () => {
  const [number, setNumber] = useState(1);
  const [isDark, setIsDark] = useState(false);

  const getItems = () => {
    return [number]
  };

  const backgroundColor = isDark ? "#000" : "#fff";

  return (
    <div style={{backgroundColor: backgroundColor}}>
      <input type="number" value={number} onChange={e => setNumber(e.target.value)}/>
      <button type="button" onClick={() => setIsDark(!isDark)}>Mudar cor</button>
      
      <List getItems={getItems} />
    </div>
  )
}

export default TesteUseCallback;