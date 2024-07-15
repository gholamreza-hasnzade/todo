
export interface ITodoTemplateProps  {
    todos?: { id: number; text: string }[];
    onAdd?: (text: string) => void | undefined;
    onDelete?: (id: number) => void | undefined;
  }