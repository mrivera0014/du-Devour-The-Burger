document.addEventListener('DOMContentLoaded', (event) => {
    event.preventDefault()
    if (event) {
        console.info('DOM loaded');
    }

    const changeDevour = document.querySelectorAll('#change-devoured');

    if (changeDevour) {
        changeDevour.forEach((button) => {
            button.addEventListener('click', (e) => {
                event.preventDefault()
                const id = e.target.getAttribute('data-id');
                const newDevour = e.target.getAttribute('data-newdevour');
                alert('I have been clicked')
                //data newDevour came in as a string and we converted it into a number
                let something = parseInt(newDevour) + 1
                const newDevourState = {
                    devoured: something
                };
                console.log(newDevourState)

                fetch(`/api/burgers/${id}`, {
                    method: "PUT",
                    headers:
                    {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(newDevourState),
                }).then((res) => {
                    if (res.ok) {
                        console.log(`Changed to ${newDevourState}`);
                        location.reload('/');
                    } else {
                        alert('Its a broken')
                    }
                })
            })
        })
    }
})

// $(document).ready(function () {
//     $("#change-devoured").on('click', function () {
//         alert('Click!')
//         var id = $(this).data("id")
//         var devour = 1
//         var newDevour = { devoured: devour }
//         $.ajax(`/api/burgers/${id}`, { type: 'PUT', data: newDevour }).then(() => {
//             console.log("Burger devoured")
//             location.reload()
//         })
//     })
// })
