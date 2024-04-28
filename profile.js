document.addEventListener('DOMContentLoaded', () => {
    // Toggle menu with menu icon
    const menuIcon = document.querySelector('.menu-icon');
    menuIcon.addEventListener('click', () => {
        alert('Menu icon clicked');
        // Implement toggle functionality for sidebar here if needed
    });

    // Function to toggle visibility of modal and overlay
    function toggleVisibility(sectionId, isVisible) {
        const section = document.getElementById(sectionId);
        const overlay = document.querySelector('.modal-overlay');
        if (isVisible) {
            section.style.display = 'block';
            overlay.style.display = 'block';
        } else {
            section.style.display = 'none';
            overlay.style.display = 'none';
        }
    }

    // Setup the overlay to close the modal when clicked
    const overlay = document.querySelector('.modal-overlay');
    overlay.addEventListener('click', () => {
        document.querySelectorAll('.editBox').forEach(box => {
            box.style.display = 'none';
        });
        overlay.style.display = 'none';
    });

    // Consolidate button event listener setup using a loop
    const buttons = ['editWork', 'editActive', 'editSocial'];
    buttons.forEach(btnId => {
        const button = document.getElementById(btnId);
        if (button) {
            button.addEventListener('click', () => {
                console.log(`${btnId} clicked`);
                toggleVisibility(`editBox${btnId.replace('edit', '')}`, true);
            });

            // Setup back and save button listeners inside the same block
            const backBtn = document.getElementById(`backBtn${btnId.replace('edit', '')}`);
            const saveBtn = document.getElementById(`saveBtn${btnId.replace('edit', '')}`);

            backBtn.addEventListener('click', () => {
                toggleVisibility(`editBox${btnId.replace('edit', '')}`, false);
            });

            saveBtn.addEventListener('click', () => {
                const infoArea = document.getElementById(`infoArea${btnId.replace('edit', '')}`);
                console.log(`Saving content for ${btnId.replace('edit', '')}`);
                toggleVisibility(`editBox${btnId.replace('edit', '')}`, false);
            });
        }
    });
});
