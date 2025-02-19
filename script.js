document.addEventListener('DOMContentLoaded', function() {
    // Mobile navigation toggling
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('navMenu');
    
    if (hamburger && mobileMenu) {
      hamburger.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
      });
      
      // Close mobile menu when a link is clicked
      const navLinks = mobileMenu.querySelectorAll('a');
      navLinks.forEach(link => {
        link.addEventListener('click', function() {
          mobileMenu.classList.remove('active');
        });
      });
    }
    
    // Gift Card Email Preview Functionality (for giftcards.html)
    const recipientEmailInput = document.getElementById('recipientEmail');
    const giftMessageInput = document.getElementById('giftMessage');
    const previewBox = document.querySelector('.preview-box');
    const giftcardForm = document.getElementById('giftcardForm');
  
    if (recipientEmailInput && giftMessageInput && previewBox) {
      function updatePreview() {
        const email = recipientEmailInput.value || "[Recipient]";
        const message = giftMessageInput.value || "[Personal message]";
        previewBox.innerHTML = `
          <p>Dear ${email},</p>
          <p>You have received a Java Junction gift card!</p>
          <p>${message}</p>
          <p>Enjoy your coffee and see you soon!</p>
          <p>Best,</p>
          <p>Java Junction Team</p>
        `;
      }
  
      recipientEmailInput.addEventListener('input', updatePreview);
      giftMessageInput.addEventListener('input', updatePreview);
  
      // For demo purposes: prevent actual form submission
      giftcardForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Gift Card Purchased! An email has been sent to the recipient.');
        giftcardForm.reset();
        updatePreview();
      });
    }
  });
  