var helpBtn = document.getElementById("helpBtn")

function functionBtn(){
    Swal.fire({
        title: "How can I Help You?",
        text: "Ask anything ?",
        icon: "info"
      });
}

function driveBtn(){
    Swal.fire({
        title: "You wanna book a Ride?",
        text: "Have a Safe Ride!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Book a Ride!"
      }).then((result) => {
        if (result.isConfirmed) Swal.fire({
          title: "Booked!",
          text: "Your ride has been booked.",
          icon: "success"
        });
      });
}