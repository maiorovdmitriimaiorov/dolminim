// Utilizing ReturnType to infer the return type of a function
function getUser() {
  return { name: 'Alice', age: 25 };
}

// Type 'User' now has the same shape as the return type of 'getUser'
type User = ReturnType<typeof getUser>;

// Function that uses the 'User' type
function greetUser(user: User) {
  console.log(`Hello, ${user.name}! You are ${user.age} years old.`);
}

// Example usage
const user = getUser();
greetUser(user);
