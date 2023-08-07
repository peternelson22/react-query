import { useDeleteTask, useUpdateTask } from './quries';

const SingleItem = ({ item }) => {
  const { deleteTask, isLoadingDeleteTask } = useDeleteTask();
  const { updateTask } = useUpdateTask();
  return (
    <div className='single-item'>
      <input
        type='checkbox'
        checked={item.isDone}
        onChange={() => updateTask({ id: item.id, isDone: !item.isDone })}
      />
      <p
        style={{
          textTransform: 'capitalize',
          textDecoration: item.isDone && 'line-through',
        }}
      >
        {item.title}
      </p>
      <button
        className='btn remove-btn'
        type='button'
        disabled={isLoadingDeleteTask}
        onClick={() => deleteTask(item.id)}
      >
        delete
      </button>
    </div>
  );
};
export default SingleItem;
