// Đếm ngược đến ngày cưới
const targetDate = new Date("2025-05-04T09:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance < 0) {
    document.getElementById("countdown").innerHTML = "<h2>Hôn lễ đã diễn ra!</h2>";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Gửi lời chúc
document.getElementById("wishForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Cảm ơn bạn đã gửi lời chúc!");
  this.reset();
});
