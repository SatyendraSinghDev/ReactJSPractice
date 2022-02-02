//  render list of array and list of objects, means multiple items

import { useState } from "react";

// backend data
const defaultItems = [
    { id: "1", value: "value1" },
    { id: "2", value: "value2" },
    { id: "3", value: "value3" },
    { id: "4", value: "value4" },
    { id: "5", value: "value5" },
    { id: "6", value: "value6" },
];

export function ListRenderingL8() {
    const [items, setItems] = useState(defaultItems);

    // With key agar map lagya hoga toh error dega react hume, har item ko unqieurly react identify krle
    return (
        <div>
            <ul style={{ listStyle: "none", paddingLeft: 0 }}>
                {items.map((item) => (
                    <li key={item.id}>
                        <label>{item.id}</label>
                        <input type="text" defaultValue={item.value} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

/*
// Conditional Rendering means how to use if else in our jsx, like spinner load

import { useQuery } from "react-query"; // third paty library used to call backend API

const fetchUsers = async () => {
  await new Promise((resolve)=> setTimeout(resolve, 10000)); // 10sec
  return "Data Information";
};


export function ConditionalRenderingL7() {
   const {data, isError, isFetching} = useQuery('fetchData', fetchUsers); // and it will return us differenet different states
//    const {data, isError, isFetching} = useQuery('fetchData', fetchUsers, {
//     retry: false  // ab bar bar fetch nahi karega data
// }); // and it will return us differenet different states

   const renderData = () => {
       if(isFetching) {
          return <div>Data is Fetching</div>
       } else if (isError) {
        return <div>Error in fetching Data</div>
       } else {
        return <div>{data}</div>
       }
   }

   return <div>{renderData()}</div>
}
*/