window.addEventListener('DOMContentLoaded', (event) => {
    const membersContainer = document.getElementById('membersContainer');
    const toggleButton = document.getElementById('toggleButton');
    let gridView = true; // Initially, set to grid view

    toggleButton.addEventListener('click', () => {
        gridView = !gridView;
        renderMembers();
    });

    function renderMembers() {
        const data = window.data; // Access data from data.json

        if (gridView) {
            membersContainer.innerHTML = ''; // Clear the container
            data.companies.forEach((company) => {
                const memberCard = document.createElement('div');
                memberCard.classList.add('member-card');
                memberCard.innerHTML = `
                    <img src="${company.image}" alt="${company.name}">
                    <h2>${company.name}</h2>
                    <p>${company.address}</p>
                    <p>${company.phone}</p>
                    <a href="${company.website}" target="_blank">Website</a>
                    <p>Membership Level: ${company.membership_level}</p>
                    <p>${company.other_info}</p>
                `;
                membersContainer.appendChild(memberCard);
            });
        } else {
            membersContainer.innerHTML = ''; // Clear the container
            data.companies.forEach((company) => {
                const memberItem = document.createElement('div');
                memberItem.classList.add('member-item');
                memberItem.innerHTML = `
                    <h2>${company.name}</h2>
                    <p>${company.address}</p>
                    <p>${company.phone}</p>
                    <a href="${company.website}" target="_blank">Website</a>
                    <p>Membership Level: ${company.membership_level}</p>
                    <p>${company.other_info}</p>
                `;
                membersContainer.appendChild(memberItem);
            });
        }
    }

    // Initial rendering
    renderMembers();
});
