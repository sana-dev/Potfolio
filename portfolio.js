function showSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}
function addEntry() {

    var email = document.getElementById('email').value;
    var name = document.getElementById('name').value;
    var message = document.getElementById('message').value;


    var newRow = document.createElement('tr');
    newRow.innerHTML = `<td>${email}</td><td>${name}</td><td>${message}</td>`;

    var tableBody = document.getElementById('entriesBody');
    tableBody.appendChild(newRow);

    document.getElementById('email').value = '';
    document.getElementById('name').value = '';
    document.getElementById('message').value = '';
}
