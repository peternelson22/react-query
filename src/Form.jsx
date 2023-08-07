import { useState } from 'react';
import { useCreatetasks } from './quries';

const Form = () => {
  const [newItemName, setNewItemName] = useState('');

  const { createTask, isLoading } = useCreatetasks();
  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(newItemName, {
      onSuccess: () => {
        setNewItemName('');
      },
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <h4>task bud</h4>
      <div className='form-control'>
        <input
          type='text '
          className='form-input'
          value={newItemName}
          onChange={(event) => setNewItemName(event.target.value)}
        />
        <button
          type='submit'
          className={isLoading ? 'btn btn-loading' : 'btn'}
          disabled={isLoading}
        >
          add task
        </button>
      </div>
    </form>
  );
};
export default Form;
