//! privacy police
document.addEventListener("DOMContentLoaded", function () {
  const consentCheckbox = document.getElementById("consent-checkbox");
  const acceptButton = document.getElementById("accept-button");

  consentCheckbox.addEventListener("change", function () {
    acceptButton.disabled = !this.checked;
  });

  acceptButton.addEventListener("click", function () {
    if (consentCheckbox.checked) {
      alert("Gizlilik Politikası kabul edildi. Teşekkürler!");
    }
  });
});

//! cookies
function acceptCookies() {
  document.getElementById("cookie-banner").style.display = "none";
  document.getElementById("cookie-overlay").style.display = "none";
  localStorage.setItem("cookiesAccepted", "true");
}

function rejectCookies() {
  document.getElementById("cookie-banner").classList.add("hidden");
  localStorage.setItem("cookiesAccepted", "false");
}

function openSettings() {
  alert("Çerez ayarları paneli eklenebilir.");
}

document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');
  
  contactForm.addEventListener('submit', function(event) {
    // Prevent the default form submission
    event.preventDefault();
    
    // Show alert in Turkish
    alert('Mesajınız başarıyla gönderildi!');
    
    // Clear all form fields
    contactForm.reset();
  });
});