// Dynamically load more testimonials
const loadMoreBtn = document.getElementById("load-more-btn");
const testimonialsContainer = document.getElementById("testimonials-container");

loadMoreBtn.addEventListener("click", () => {
  const newTestimonial = document.createElement("div");
  newTestimonial.classList.add("testimonial-card");
  newTestimonial.innerHTML = `
    <h3>Sourav G. – New Alipore</h3>
    <p class="rating">⭐⭐⭐⭐⭐</p>
    <p class="review">"Switching to Glacier Water Purifier Services was the best decision. Their AMC plan is affordable, and their service is excellent!"</p>
  `;
  testimonialsContainer.appendChild(newTestimonial);
});

// Add new testimonials dynamically
const testimonialForm = document.getElementById("testimonial-form");

testimonialForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const location = document.getElementById("location").value;
  const review = document.getElementById("review").value;
  const rating = document.getElementById("rating").value;

  const newTestimonial = document.createElement("div");
  newTestimonial.classList.add("testimonial-card");
  newTestimonial.innerHTML = `
    <h3>${name} – ${location}</h3>
    <p class="rating">${rating}</p>
    <p class="review">"${review}"</p>
  `;

  testimonialsContainer.appendChild(newTestimonial);

  // Clear the form
  testimonialForm.reset();
});
