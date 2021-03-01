document.addEventListener(DOMContentLoaded, (event) => {
    if (event) {
        console.info('DOM loaded');
    }

    const button = document.querySelectorAll('.change-devoured');

    if (button) {
        button.forEach((button) => {
            button.addEventListener('click', (e) => {
                const id = e.target.getAttribute('data-id');
                const newDevour = e.target.getAttribute('data-newdevour');

                const newDevourState = {
                    devoured = newDevour
                };

                fetch(`/api/burgers/${id}`, {
                    method: `PUT`,
                    headers: {
                        'application/json',
                        'Content-Type': 'application/json',
                    },

                    body: JSON.stringify(newDevour),
                }).then((res) => {
                    if (res.ok) {
                        console.log(`Changed to ${newDevourState}`);
                        location.reload('/');
                    }
                })
            })
        }
    }
})