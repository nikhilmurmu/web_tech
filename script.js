document.getElementById('booking-form').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const sport = document.getElementById('sport').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const user = document.getElementById('user').value;

    try {
        const response = await fetch('http://localhost:3000/bookings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ sport, date, time, user })
        });

        if (!response.ok) {
            throw new Error('Booking failed');
        }

        alert('Booking successful!');
    } catch (error) {
        console.error('Error:', error);
        alert('Booking failed. Please try again.');
    }
});