// Typed text animation for hero section
const typed = new Typed("#typed-text", {
  strings: ["Welcome to Palmwave Beach House", "Experience Luxury", "Book Your Stay Today"],
  typeSpeed: 60,
  backSpeed: 30,
  loop: true
});

// Dark mode toggle
const toggleBtn = document.getElementById("darkModeToggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// 🧾 Booking form submission
document.getElementById("bookingForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const form = e.target;
  const data = {
    name: form.name.value,
    email: form.email.value,
    date: form.date.value,
    guests: form.guests.value,
  };

  try {
    const res = await fetch("/book", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    if (res.ok) {
      // ✅ Option 2: Show popup message
      alert("🎉 Thank you for booking with Palmwave Beach House!");
      form.reset();
    } else {
      alert("❌ Booking failed. Please try again.");
    }
  } catch (err) {
    console.error(err);
    alert("⚠️ Server error. Try again later.");
  }
});
