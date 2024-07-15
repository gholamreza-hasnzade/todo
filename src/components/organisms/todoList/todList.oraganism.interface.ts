export interface ITodoList {
    todos?: { id: number; text: string }[];
    onDelete?: (id: number) => void | undefined;
}