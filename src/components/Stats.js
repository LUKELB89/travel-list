export function Stats({ items }) {
    if (!items.length) return (
        <p className="stats">
            <em>
                Start adding some items to your packing list! 🚀
            </em>
        </p>
    );

    const numItems = items.length;
    const itemsPacked = items.filter((items) => items.packed).length;
    const percentage = Math.round((itemsPacked / numItems) * 100);

    return <footer className="stats">
        <em>
            {percentage === 100 ? "You have everything! Ready to go ✈" : `🧳 You have ${numItems} items on your list, and you already packed ${itemsPacked} items (${percentage}%)`}
        </em>
    </footer>;
}
