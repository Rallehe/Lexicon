



// TODO: Create a type alias for ID that can be either string or number
type ID = number | string;

// TODO: Create a function that formats an ID
// If it's a number, prefix it with "ID-"
// If it's a string, return it in uppercase
function formatID(id: ID): string {
    if (typeof id === "string") {
        return id.toUpperCase();
    }
    return `ID-${id}`;
}


// TODO: Create a type for different user roles
type UserRole = "admin" | "user" | "guest"; // admin, user and guest

// TODO: Create an interface for User with:
// - id (ID type)
// - name (string)
// - role (UserRole)
// - email (string, optional)
interface User {
    id: ID,
    name: string,
    role: UserRole,
    email?: string,
}

// TODO: Create a function that checks if a user has admin privileges
function isAdmin(user: User): boolean {
    return user.role === "admin";
}

// TODO: Create a function that returns appropriate greeting based on role
function getRoleGreeting(user: User): string {
    // your implementation using switch or if-else
    switch (user.role) {
        case "admin":
            return `Welcome ${user.name} you're an ${user.role}`;
        case "user":
            return `Welcome ${user.name} you're a ${user.role}`;
        case "guest":
            return `Welcome ${user.name} you're a ${user.role}`;
        default:
            return `Welcome ${user.name} you're a ...?`
    }
}
// Test your code
const user1: User = { id: 1, name: "Alice", role: "admin" };
const user2: User = { id: "USER-123", name: "Bob", role: "user", email: "bob@example.com" };
console.log(formatID(user1.id));
console.log(isAdmin(user1));
console.log(getRoleGreeting(user2))