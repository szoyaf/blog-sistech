const bearerToken = '6c9b9619-e40f-4862-b1dc-e58ea32856fd';
const apiUrl = 'https://sistech-api.vercel.app/blog/';

fetch(apiUrl, {
  headers: {
    'Authorization': `Bearer ${bearerToken}`
  }
})
  .then(response => response.json())
  .then(data => {
    displayPosts(data);
  })
  .catch(error => {
    console.log('Error:', error);
  });


// function displayPosts(posts) {
//   const listGroupElements = document.getElementsByClassName('list-group');
//   listGroupElement = listGroupElements[0];

//   const ulElement = document.createElement('ul');
//   ulElement.setAttribute("id", "posts")

//   posts.forEach(post => {
//     const liElement = document.createElement('li');
   
//     liElement.innerHTML = `
//       <h2>${post.title}</h2>
//       <p>${post.content}</p>
//       <p>${post.like}</p>`;
//     ulElement.appendChild(liElement);
//   });

//   const commentElement = document.createElement("h1");
//   commentElement.setAttribute("id","cool-post")
//   commentElement.innerText = "Cool Posts";

//   listGroupElement.appendChild(commentElement);
//   listGroupElement.appendChild(ulElement);
// }

function displayPosts(posts) {
    const listGroupElements = document.getElementsByClassName('list-group');
    listGroupElement = listGroupElements[0];
  
    posts.forEach(post => {
      const aElement = document.createElement('a');
      aElement.setAttribute("class","list-group-item list-group-item-action");
      const divElement = document.createElement('div');
      divElement.setAttribute("class","d-flex w-100 justify-content-between");
      const h5Element = document.createElement('h5');
      h5Element.setAttribute("class","mb-1");
      const pElement = document.createElement('p');
      pElement.setAttribute("class","mb-1");

      aElement.appendChild(divElement);
      aElement.appendChild(pElement);
      divElement.appendChild(h5Element);

      h5Element.innerText = post.title;
      pElement.innerText = post.content;

      listGroupElement.appendChild(aElement);
    });
  }