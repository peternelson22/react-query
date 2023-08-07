import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import customFetch from './utils';
import { toast } from 'react-toastify';

export const useGetTasks = () => {
  const { data, isLoading, error, isError } = useQuery({
    queryKey: ['tasks'],
    queryFn: async () => {
      const { data } = await customFetch.get('/'); // skipping data.data
      return data;
    },
  });
  return { data, isLoading, error, isError };
};

export const useCreatetasks = () => {
  const queryClient = useQueryClient();

  const { mutate: createTask, isLoading } = useMutation({
    mutationFn: (title) => customFetch.post('/', { title }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
      toast.success('Added successfully');
    },
    onError: (error) => {
      console.log(error);
    },
  });
  return { createTask, isLoading };
};

export const useUpdateTask = () => {
  const queryClient = useQueryClient();
  const { mutate: updateTask } = useMutation({
    mutationFn: ({ id, isDone }) => customFetch.patch(`/${id}`, { isDone }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
      toast.success('updated successfully');
    },
  });
  return { updateTask };
};

export const useDeleteTask = () => {
  const queryClient = useQueryClient();

  const { mutate: deleteTask, isLoading: isLoadingDeleteTask } = useMutation({
    mutationFn: (id) => customFetch.delete(`/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
      toast.success('deleted successfully');
    },
  });
  return { deleteTask, isLoadingDeleteTask };
};
