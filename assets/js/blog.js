const toggleModeBtn = document.getElementById("toggleMode");
const backButton = document.getElementById("backButton");

toggleModeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});

document.addEventListener("DOMContentLoaded", function () {
  const blogPosts = JSON.parse(localStorage.getItem("blogPosts")) || [];

  const postsList = document.getElementById("postsList");

  blogPosts.forEach((post) => {
    const postElement = document.createElement("div");
    postElement.classList.add("post");
    postElement.innerHTML = `
            <h3>Title: ${post.title}</h3>
            <p>${post.content}</p>
            <p>Posted by: ${post.username}</p>
        `;
    postsList.appendChild(postElement);
  });
});

backButton.addEventListener("click", function () {
  window.location.href = "index.html";
});
