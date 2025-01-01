function addRowToGoogleSheet(rowData) {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzff621V8yEYEm1sddRap2CJYvbjMOTHOzhHHcSIFcSbTDk9YS25YLeNY7ljhsIGu6x/exec';
    
    fetch(scriptURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data: rowData }),
    })
      .then(response => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json();
      })
      .then(result => {
        console.log(result);
        alert('Row added successfully!');
      })
      .catch(error => {
        console.error('Error:', error);
        alert('Failed to add row.');
      });
  }
  
  // Example usage
  const row = ['Value 1', 'Value 2', 'Value 3'];
  addRowToGoogleSheet(row);
  
