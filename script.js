document.getElementById('dataForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;

    const response = await fetch('http://localhost:3000/api/data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, age })
    });

    const result = await response.json();
    console.log(result);
    fetchData();
});

async function fetchData() {
    const response = await fetch('http://localhost:3000/api/data');
    const data = await response.json();
    const dataList = document.getElementById('dataList');
    dataList.innerHTML = '';

    data.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `Name: ${item.name}, Age: ${item.age}`;
        dataList.appendChild(li);
    });
}

fetchData();
