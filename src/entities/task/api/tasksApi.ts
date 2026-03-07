import { baseApi } from 'shared/api/baseApi.ts';
import type { Task } from 'entities/task';

export const tasksApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getTasks: build.query<Task[], void>({
      query: () => 'todos',
      transformResponse: (response: { todos: Task[] }) => response.todos,
      providesTags: ['Tasks'],
    }),
  }),
  overrideExisting: false,
});

export const { useGetTasksQuery } = tasksApi;
