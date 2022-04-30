// 01 handle promise: then approach
fetch('http://example.com/movies.json')
  .then(response => response.json())
  .then(data => console.log(data));

// 02 - CONFIG OBJECT
fetch('/api/posts', {
  method: 'POST',
  credentials: 'same-origin',
  headers: {
      'Content-Type': 'application/json'
  },
  body: JSON.stringify({ title: 'My Title', content: 'My Content' })
})
  .then(response => response.json())
  .then(data => console.log(data));

fetch('/api/posts', {
  method: 'GET',
  credentials: 'same-origin'
})
  .then(response => response.json())
  .then(data => console.log(data));

// 03 handle promise: async/await approach
(async () => {
  const rawResponse = await fetch('https://bin.org/post', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({a: 1, b: 'Textual content'})
  });
  const content = await rawResponse.json();
  console.log(content);
})();