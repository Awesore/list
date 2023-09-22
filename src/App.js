import React, { useState } from 'react';
import List from './components/List';
import Comment from './components/Comment';

function App() {
  const [lists, setLists] = useState([]);
  const [selectedList, setSelectedList] = useState(null);
  const [comments, setComments] = useState({});

  return (
      <div className="App">
        <List lists={lists} setLists={setLists} setSelectedList={setSelectedList} />
        <Comment selectedList={selectedList} comments={comments[selectedList]} setComments={(newComments) => setComments({...comments,[selectedList]: newComments})} />
      </div>
  );
}

export default App;

