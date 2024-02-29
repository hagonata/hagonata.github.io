document.addEventListener('DOMContentLoaded', function() {
    const postsList = document.getElementById('posts-list');
    
    const posts = [
      { title: "Post about ML 1", url: "post-about-ml-1.html" },
      { title: "My Second Post", url: "my-second-post.html" }
    ];
  
    if (postsList) {
      postsList.innerHTML = '';

      posts.forEach(post => {
        let listItem = document.createElement('li');
        let link = document.createElement('a');
        link.href = post.url;
        link.textContent = post.title;
        listItem.appendChild(link);
        postsList.appendChild(listItem);
      });
    }
  });
  