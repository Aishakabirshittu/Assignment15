// Question 1 - Update User Data (PUT request)
function updateUserData(userData) {
    const url = `https://jsonplaceholder.typicode.com/users/${userData.id}`;
  
    fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
    .then(response => response.json())
    .then(data => console.log('Updated User:', data))
    .catch(error => console.error('Error:', error));
  }
  
  // Example usage of Question 1
  updateUserData({ id: 1, name: 'Fatima Isa', email: 'fatima.isa@example.com' });
  
 
  
// Question 2 - Fetch and Filter Data (Filter users by ID > 5)
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
      const filteredData = data.filter(user => user.id > 5);
      console.log('Filtered Data:', filteredData);
    })
    .catch(error => console.error('Error:', error));


  
// Question 3 - Fetch Names and Display
  document.getElementById('fetch-names-btn').addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        const list = document.getElementById('names-list');
        list.innerHTML = '';
        data.forEach(user => {
          const listItem = document.createElement('li');
          listItem.textContent = user.name;
          list.appendChild(listItem);
        });
      })
      .catch(error => console.error('Error:', error));
  });


  
// Question 4 - Fetch Data into a Table
  fetch('https://reqres.in/api/users')
    .then(response => response.json())
    .then(data => {
      const tableBody = document.getElementById('data-table-body');
      tableBody.innerHTML = '';
      data.data.forEach(user => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${user.id}</td>
          <td>${user.first_name} ${user.last_name}</td>
          <td>${user.email}</td>
        `;
        tableBody.appendChild(row);
      });
    })
    .catch(error => console.error('Error:', error));


  
// Question 5 - Fetch with Try...Catch Block
  async function fetchWithTryCatch() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      console.log('Fetched Data:', data);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  // Example
  fetchWithTryCatch();

  
// Question 6 - Async Function with Fetch and then()
  async function fetchUserData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    response.json().then(data => {
      console.log('User Data:', data);
    }).catch(error => console.error('Error:', error));
  }
  
  // Example
  fetchUserData();
  
  
  
// Question 7 - POST Request
  async function createUser() {
    const response = await fetch('https://reqres.in/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: 'Jane Doe', job: 'Developer' })
    });
    const data = await response.json();
    console.log('User Created:', data);
  }
  
  // Example
  createUser();
  


// Question 8 - Using Promise.all for Multiple Fetch Requests
  const request1 = fetch('https://jsonplaceholder.typicode.com/users');
  const request2 = fetch('https://reqres.in/api/users');
  
  Promise.all([request1, request2])
    .then(responses => Promise.all(responses.map(res => res.json())))
    .then(data => {
      console.log('Combined Data:', data);
    })
    .catch(error => console.error('Error:', error));
  
    
// Question 9 - API Request with Input
  document.getElementById('fetch-user-btn').addEventListener('click', () => {
    const userId = document.getElementById('user-input').value;
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(response => response.json())
      .then(data => {
        const userDataDiv = document.getElementById('user-data');
        userDataDiv.textContent = data ? `User: ${data.name}, Email: ${data.email}` : 'User not found';
      })
      .catch(error => console.error('Error:', error));
  });

  
// Question 10 - Delete User by ID
  function deleteUser(userId) {
    fetch(`https://reqres.in/api/users/${userId}`, {
      method: 'DELETE'
    })
    .then(response => console.log('Response Status:', response.status))
    .catch(error => console.error('Error:', error));
  }
  
  // Example
  deleteUser(2);
  