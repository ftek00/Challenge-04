const toggleModeBtn = document.getElementById("toggleMode");

toggleModeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});

const form = document.getElementById("blogForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;

  if (username && title && content) {
    const blogPost = {
      username: username,
      title: title,
      content: content,
    };

    const existingPosts = JSON.parse(localStorage.getItem("blogPosts")) || [];

    existingPosts.push(blogPost);

    localStorage.setItem("blogPosts", JSON.stringify(existingPosts));

    alert("Blog post submitted successfully! Redirecting to posts page.");
    window.location.href = "blog.html";
  } else {
    alert("Please complete all fields in the form.");
  }
});
