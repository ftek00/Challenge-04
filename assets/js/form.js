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
}
}
