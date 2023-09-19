export interface Todo {
  id: string;
  title: string;
  completed: boolean;
  dateCreated: string;
  dateCompleted: string | null;
  dateLastModified: string;
}

export type TodoDraft = Omit<
  Todo,
  'id' | 'completed' | 'dateCreated' | 'dateCompleted' | 'dateLastModified'
>;
