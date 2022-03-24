import { FaPlus } from 'react-icons/fa';
import { useRef } from 'react'; 

const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
    const inputRef = useRef();
  return (
    <div className="addItem__shadow-before-list">
        
      <form className='addForm' onSubmit={handleSubmit}>
        <label htmlFor="addItem">Add Item</label>
        <input
            autoFocus
            ref={inputRef}
            type="text"
            id='addItem'
            placeholder='Add Item'
            required
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
        />
        <button
            type='submit'
            aria-label='Add Item'
            onClick ={() => inputRef.current.focus() }
        >
            <FaPlus />
        </button>
          
      </form>
    </div>
  )
}

export default AddItem
