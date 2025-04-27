function addPerson() {
  const pricePerGram = parseFloat(document.getElementById('pricePerGram').value);
  const quantity = parseFloat(document.getElementById('quantity').value);
  const personName = document.getElementById('personName').value.trim();
  const dueDate = document.getElementById('dueDate').value;

  if (!pricePerGram || !quantity || !personName || !dueDate) {
    alert('Wypełnij wszystkie pola!');
    return;
  }

  const amountOwed = (pricePerGram * quantity).toFixed(2);

  const personEntry = document.createElement('div');
  personEntry.className = 'person';
  personEntry.innerHTML = `
    <strong>${personName}</strong><br>
    Kwota: ${amountOwed} zł<br>
    Termin spłaty: ${dueDate}
  `;

  document.getElementById('peopleList').appendChild(personEntry);

  // Czyścimy pola
  document.getElementById('pricePerGram').value = '';
  document.getElementById('quantity').value = '';
  document.getElementById('personName').value = '';
  document.getElementById('dueDate').value = '';
}
