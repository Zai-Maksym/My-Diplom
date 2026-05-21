const form = document.getElementById("bookingForm");

form.addEventListener("submit", async function(event){

    event.preventDefault();

    const data = {

        first_name: document.getElementById("first_name").value,

        last_name: document.getElementById("last_name").value,

        email: document.getElementById("email").value,

        phone: document.getElementById("phone").value,

        booking_date: document.getElementById("booking_date").value,

        room_id: 1

    };

    try{

        const response = await fetch(

            "http://localhost:3000/booking",

            {

                method:"POST",

                headers:{
                    "Content-Type":"application/json"
                },

                body: JSON.stringify(data)

            }

        );

        const result = await response.json();

        alert(result.message);

        form.reset();

    }

    catch(error){

        console.log(error);

        alert("Помилка сервера");

    }

});
