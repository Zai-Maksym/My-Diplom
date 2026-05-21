const form = document.getElementById("bookingForm");

form.addEventListener("submit", async function(event){

    event.preventDefault();

    const data = {

        name: document.getElementById("name").value,

        surname: document.getElementById("surname").value,

        email: document.getElementById("email").value,

        phone: document.getElementById("phone").value,

        booking_date: document.getElementById("date").value,

        room_name: "Номер для одного"

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
