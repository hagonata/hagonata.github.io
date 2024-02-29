document.addEventListener('DOMContentLoaded', function() {
    const postsList = document.getElementById('posts-list');
    
    const posts = [
      { 
        title: "Post about ML 1", 
        url: "/pages/posts/content/post1.html", 
        date: "10/02/2024" 
      },
      { 
        title: "My Second Post", 
        url: "my-second-post.html", 
        date: "10/02/2024"
      }
    ];
  
    if (postsList) {
      postsList.innerHTML = '';
  
      posts.forEach(post => {
        let listItem = document.createElement('li');
  
        let dateElement = document.createElement('span');
        dateElement.textContent = post.date;
        dateElement.className = 'post-date';
        listItem.appendChild(dateElement);
  
        let titleElement = document.createElement('a');
        titleElement.href = post.url;
        titleElement.textContent = post.title;
        titleElement.className = 'post-title';
        listItem.appendChild(titleElement);
  
        postsList.appendChild(listItem);
      });
    }
  });