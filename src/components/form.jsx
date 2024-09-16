import React, { useEffect , useState ,useRef } from "react";

const InputForm = () => {
  const [input, setInput] = useState("");
  const [lists, setLists] = useState([]);
  const [id, setId] = useState(0);

  const inputRef = useRef(null);

  const addList = () => {
    let status = false;

    input !== "" ? (status = true) : (status = false);

    status
      ? (() => {
          setLists([...lists, { id: id, text: input }]);
          setInput("");
          setId(id + 1);
          inputRef.current.focus()
          console.log(id);
        })()
      : console.log("Please enter a value");
  };

  useEffect(() => {
      inputRef.current.focus()
  },[])

  useEffect(() => {
    // Load data from local storage when component mounts
    const storedLists = JSON.parse(localStorage.getItem('lists')) || [];
    setLists(storedLists);
  }, []);

  useEffect(() => {
    // Save data to local storage whenever lists change
    localStorage.setItem('lists', JSON.stringify(lists));
  }, [lists]);

  const deleteList = (id) => {
    const newList = lists.filter((list) => list.id !== id);
    setLists(newList);
  };

  return (
    <div>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          ref={inputRef}
          type="text"
          placeholder="Add a new todo"
          className="input"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />

        <button
          type="submit"
          onClick={() => addList()}
          className="add-btn"
        >
          Add
        </button>
      </form>

      <ul className="w-full mt-4">
        {lists.map((list) => (
          <li key={list.id} className="list">
            {list.text}
            <button className="btn" onClick={() => deleteList(list.id)} >
              Del
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InputForm;
