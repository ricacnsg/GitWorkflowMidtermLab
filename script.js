//behavior for start button
const myButton = document.getElementById("startButton");
const message = document.getElementById("message");
myButton.addEventListener("click", () => {  message.textContent = "Goodluck to your Lab Exam!";});

//behavior for navigations
const links = document.querySelectorAll('.nav-links a');
        links.forEach(link => {
            link.addEventListener('click', function() {
                document.querySelector('.nav-links a.active').classList.remove('active');
                this.classList.add('active');
            });
        });