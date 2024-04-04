const axios = require('axios');

// Define the bearer token
const myToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzEyMjEzMjE3LCJpYXQiOjE3MTIyMTI5MTcsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImY2NTQxNzQ3LWFjYTEtNDRjMC04ZmM5LTM2NTQyNDFjMTUzMiIsInN1YiI6ImtpdDI1LjIxYmFkMDE3QGdtYWlsLmNvbSJ9LCJjb21wYW55TmFtZSI6IkthbGFpZ25hcmthcnVuYW5pZGhpIEluc3RpdHV0ZSBPZiBUZWNobm9sb2d5IiwiY2xpZW50SUQiOiJmNjU0MTc0Ny1hY2ExLTQ0YzAtOGZjOS0zNjU0MjQxYzE1MzIiLCJjbGllbnRTZWNyZXQiOiJ3VFVPaU1Sa1R3aWNBdG1TIiwib3duZXJOYW1lIjoiR29rdWxha3Jpc2huYW4iLCJvd25lckVtYWlsIjoia2l0MjUuMjFiYWQwMTdAZ21haWwuY29tIiwicm9sbE5vIjoiNzExNTIxYmFkMDE3In0.P_B57fNZk4qs6DD5sv_FKd7dT311_fBZfpmRI3fOwDA';

// Set the authorization header with the bearer token
const headers = {
  Authorization: `Bearer ${myToken}`
};

// Make a GET request to the endpoint
axios.get('http://20.244.56.144/test/primes', {
  headers: headers
})
.then(response => {
  const data = response.data; // Extract the response data
  const numbers = data.numbers; // Extract numbers array from the response
  const integers = numbers.map(Number); // Convert data to integers
  const sum = integers.reduce((total, num) => total + num, 0); // Calculate sum
  const average = sum / integers.length; // Calculate average
  console.log('Numbers:', integers);
  console.log('Average:', average);
})
.catch(error => {
  // Handle any errors
  console.error('Error fetching data:', error);
});
