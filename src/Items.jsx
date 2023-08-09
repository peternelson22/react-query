import SingleItem from './SingleItem';
import { useQuery } from '@tanstack/react-query';
import customFetch from './utils';
import { useGetTasks } from './queries';

const Items = () => {
  const { data, isLoading, isError, error } = useGetTasks();

  if (isLoading) {
    return <p style={{ marginTop: '1rem' }}>Loading....</p>;
  }

  if (isError) {
    return <p style={{ marginTop: '1rem' }}>There was an error...</p>;
  }

  // if (error) {
  //   return <p style={{ marginTop: '1rem' }}>{error.response.data}</p>;
  // }

  return (
    <div className='items'>
      {data.taskList.map((item) => {
        return <SingleItem key={item.id} item={item} />;
      })}
    </div>
  );
};
export default Items;
