import React, {useState, useEffect} from 'react'

const List = ({ getItems }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getItems);
    console.log("updated number");
  }, [getItems])

  return (
    <div>
      {
        items.map(item => {
          return (
            <p key={item}>{item}</p>
          )
        })
      }
    </div>
  )
}

export default List;