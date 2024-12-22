document.getElementById('data-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;

    const response = await fetch('http://localhost:3000/api/names', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name }),
    });

    if (response.ok) {
        loadData();
        document.getElementById('name').value = '';
    } else {
        alert('Error saving data.');
    }
});

async function loadData() {
    const response = await fetch('http://localhost:3000/api/names');
    const data = await response.json();

    const list = document.getElementById('data-list');
    list.innerHTML = '';
    data.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = item.name;
        list.appendChild(li);
    });
}

loadData();
