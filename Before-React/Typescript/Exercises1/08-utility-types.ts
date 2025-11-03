// Base interface for exercises
interface Todo {
    id: number;
    title: string;
    description: string;
    completed: boolean;
    createdAt: Date;
}

type TodoUpdate = Partial<Todo>;

function updateTodo(todo: Todo, updates: TodoUpdate): Todo {
    return {
        ...todo,
        ...updates,
    }
}

type TodoPreview = Pick<Todo, "id" | "title">

function getTodoPreview(todo: Todo): TodoPreview {
    return {
        id: todo.id,
        title: todo.title
    }
}

type NewTodo = Omit<Todo, "id">;

function createTodo(todoData: NewTodo): Todo {
    return {
        id: Date.now(),
        title: todoData.title,
        description: todoData.description,
        completed: todoData.completed,
        createdAt: todoData.createdAt,
    }
}

type ReadonlyTodo = Readonly<Todo>;

type TodoStats = Record<'total' | 'completed' | 'pending', number>;

function calculateStats(todos: Todo[]): TodoStats {
    const total = todos.length;
    const completed = todos.filter(todos => todos.completed).length;
    const pending = total - completed;
    return {
        total,
        completed,
        pending
    }
}

interface OptionalConfig { apiUrl?: string; timeout?: number; retries?: number; }
type RequiredConfig = Required<OptionalConfig>;

// Test your code
const todo: Todo = {
    id: 1, title: "Learn TypeScript",
    description: "Complete all exercises",
    completed: false, createdAt: new Date()
};
const todo2: Todo = {
    id: 2, title: "Learn TypeScript2",
    description: "Complete all exercises",
    completed: false, createdAt: new Date()
};
const todo3: Todo = {
    id: 3, title: "Learn TypeScript3",
    description: "Complete all exercises",
    completed: true, createdAt: new Date()
};

const todos: Todo[] = [todo, todo2, todo3];

console.log(todo);
const updated = updateTodo(todo, { completed: true });
console.log(updated);
const preview = getTodoPreview(todo);
console.log(preview);
console.log(calculateStats(todos));