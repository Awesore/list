import React, { useState } from 'react';
import "../App.css"

function List({ lists, setLists, setSelectedList }) {
    const [newList, setNewList] = useState('');
    const [activeIndex, setActiveIndex] = useState(null);

    const handleAddList = () => {
        if (newList.trim() !== '') {
            setLists([...lists, newList]);
            setNewList('');
        }
    };

    const handleDeleteList = (indexToDelete) => {
        const updatedLists = [...lists];
        updatedLists.splice(indexToDelete, 1);
        setLists(updatedLists);
    };

    const handleListItemClick = (index) => {
        setActiveIndex(index);
        setSelectedList(lists[index]);
    };

    return (
        <div className="list">
            <h2>Items</h2>
            <div className="up-list">
                <input
                    className="text-field__input"
                    type="text"
                    placeholder="Type name here"
                    value={newList}
                    onChange={(e) => setNewList(e.target.value)}
                />
                <button className="btn" onClick={handleAddList}>Add New List</button>
            </div>

            <ul>
                {lists.map((list, index) => (
                    <li
                        className={`items-list ${activeIndex === index ? 'active' : ''}`}
                        key={index}
                        onClick={() => handleListItemClick(index)}
                    >
                        {list}
                        <button
                            className="btn-delete"
                            onClick={() => handleDeleteList(index)}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default List;
