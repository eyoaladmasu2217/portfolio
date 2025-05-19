function Buttonclick() {
  alert('The button has been clicked');
}

function Buttonclick() {
  document.getElementById('tonicModal').style.display = 'block';
}

document.addEventListener('DOMContentLoaded', function() {
  var closeBtn = document.getElementById('closeTonicModal');
  var modal = document.getElementById('tonicModal');
  if (closeBtn && modal) {
    closeBtn.onclick = function() {
      modal.style.display = 'none';
    };
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = 'none';
      }
    };
  }
});