  // Get modal element and content
  const modal = document.getElementById("skillsModal");
  const modalContent = document.getElementById("modalContent");
  const openModalBtn = document.getElementById("openModalBtn");

  // Open modal when button is clicked
  openModalBtn.addEventListener("click", (e) => {
      e.preventDefault();  // Prevent default link behavior
      modal.classList.remove("hidden");
  });

  // Close modal if user clicks outside of the modal content
  modal.addEventListener("click", (e) => {
      if (e.target === modal) {
          modal.classList.add("hidden");
      }
  });

  // Prevent closing the modal if user clicks inside the modal content
  modalContent.addEventListener("click", (e) => {
      e.stopPropagation(); // Prevent the click event from reaching the modal background
  });


  