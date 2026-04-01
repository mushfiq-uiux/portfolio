/*======== FAQ Accordion ========*/
document.addEventListener("DOMContentLoaded", function() {
    const faqQuestions = document.querySelectorAll(".faq-question");
  
    faqQuestions.forEach(question => {
      question.addEventListener("click", function() {
        const isActive = this.classList.contains("active");
  
        // Close all answers and remove active state
        faqQuestions.forEach(q => {
          q.classList.remove("active");
          q.nextElementSibling.style.maxHeight = null;
        });
  
        // If the clicked question was not active, open it
        if (!isActive) {
          this.classList.add("active");
          const answer = this.nextElementSibling;
          answer.style.maxHeight = answer.scrollHeight + "px";
        }
      });
    });
  });