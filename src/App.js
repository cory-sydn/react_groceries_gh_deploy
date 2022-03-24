import { useState } from "react";
import { Header, Content, Footer, Counter } from "./containers";
import { AddItem, SearchItem } from "./components";

function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem("groceries")) || [] );
  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");

  const addAndSave = (data) => {
    setItems(data);
    localStorage.setItem("groceries",JSON.stringify(data));
  };

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    addAndSave(listItems);    
  };

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    addAndSave(listItems);
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    addAndSave(listItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem("");
  };


  return (
    <div className="App" >
      <Header
        title="Groceries List"
        length={items.length}
      />
      <SearchItem search={search} setSearch={setSearch} />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <main>      
          <Content
            items={items.filter((item) =>
              item.item.toLowerCase().includes(search.toLowerCase())
            )}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          />        
      </main>
      <Counter />
      <Footer />
    </div>
  );
}

export default App;
