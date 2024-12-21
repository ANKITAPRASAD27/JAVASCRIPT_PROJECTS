 // FAQ Toggle Functionality
 const faqButtons = document.querySelectorAll('.faq-item button');

 faqButtons.forEach(button => {
     button.addEventListener('click', () => {
         // Close other open items
         faqButtons.forEach(btn => {
             if (btn !== button) {
                 btn.classList.remove('active');
                 btn.nextElementSibling.style.display = 'none';
             }
         });

         // Toggle current item
         const answer = button.nextElementSibling;
         button.classList.toggle('active');
         answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
     });
 });