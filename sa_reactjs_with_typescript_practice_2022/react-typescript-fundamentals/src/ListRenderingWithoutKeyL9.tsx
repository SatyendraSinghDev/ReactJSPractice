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

export function ListRenderingWithoutKeyL9() {
    const [items, setItems] = useState(defaultItems);

    const addItem = () => {
        const item = defaultItems.find((i) => !items.includes(i));
        if(item) {
            setItems([...items, item]);
        }
    };

    const removeItem = (item: any) => {
        setItems(items.filter((i) => i !== item));
    }

    // With key agar map lagya hoga toh error dega react hume, har item ko unqieurly react identify krle
    return (
        <div>
            <button onClick={addItem}>Add item</button>
            <ul style={{ listStyle: "none", paddingLeft: 0 }}>
                {items.map((item) => (
                    // <li>
                    <li key={item.id}>
                        <button onClick={() => {removeItem(item)}}>Remove item</button>
                        <label>{item.id}</label>
                        <input type="text" defaultValue={item.value} />
                    </li>
                ))}
            </ul>
        </div>
    );
}