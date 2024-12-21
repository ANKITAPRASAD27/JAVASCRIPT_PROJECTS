// Dynamically load more blog posts
const loadMoreBtn = document.getElementById("load-more-btn");
const blogContainer = document.getElementById("blog-container");

loadMoreBtn.addEventListener("click", () => {
  // Example of a new blog post being added dynamically
  const newBlog = document.createElement("div");
  newBlog.classList.add("blog-card");
  newBlog.innerHTML = `
    <img src="blog4.jpg" alt="RO vs UV: Which One to Choose?">
    <div class="blog-content">
      <h3>RO vs UV: Which One to Choose?</h3>
      <p>Confused between RO and UV water purifiers? This blog highlights the key differences and helps you make an informed decision.</p>
      <a href="#" class="read-more">Read More</a>
    </div>
  `;
  blogContainer.appendChild(newBlog);
});
