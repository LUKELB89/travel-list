import { useState } from "react";
import { Item } from "./Item.js";

export function PackingList({ itemsToAdd, onDeleteItem, onHandleToggleItem, onHandleClearList }) {
    const [sortBy, setSortBy] = useState("input");

    let sortedItems;

    if (sortBy === "input") sortedItems = itemsToAdd;

    if (sortBy === 'description') sortedItems = itemsToAdd
        .slice()
        .sort((a, b) => a.description.localeCompare(b.description));

    if (sortBy === "packed") sortedItems = itemsToAdd
        .slice()
        .sort((a, b) => Number(a.packed) - Number(b.packed));

    return (
        <div className="list">
            <ul>
                {sortedItems.map(obj => (
                    <Item
                        itemAdded={obj}
                        onDeleteItem={onDeleteItem}
                        key={obj.id}
                        onHandleToggleItem={onHandleToggleItem} />
                ))}
            </ul>
            <div className="actions">
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                    <option value="input">Sort by input order</option>
                    <option value="description">Sort by description</option>
                    <option value="packed">Sort by packed status</option>
                </select>
                <button onClick={() => onHandleClearList()}>Clear list</button>
            </div>
        </div>
    );
}
