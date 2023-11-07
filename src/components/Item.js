


export function Item({ itemAdded, onDeleteItem, onHandleToggleItem }) {
    return (
        <li>
            <input type="checkbox" value={itemAdded.packed}
                onChange={() => onHandleToggleItem(itemAdded.id)} />
            <span style={itemAdded.packed ? { textDecoration: "line-through" } : {}}>
                {itemAdded.quantity} {itemAdded.description}
            </span>
            <button onClick={() => onDeleteItem(itemAdded.id)}>❌</button>
        </li>
    );
}
