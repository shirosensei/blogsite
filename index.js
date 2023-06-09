const menuToggle = document.getElementById('mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');

// menuToggle.addEventListener('click', () => {
//   navLinks.classList.toggle('show');
// });

// menuToggle.addEventListener('touchstart', () => {
//   navLinks.classList.toggle('show');
// });


// const toggleBtn = document.getElementById("#navbar-toggle");
// if (toggleBtn) {
//   toggleBtn.addEventListener("click", () => {
//     const navbarMenu = document.getElementById("#navbar-menu");
//     navbarMenu.classList.toggle("active");
//   });
// }


const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
});

const detailsSummaries = document.querySelectorAll("details summary");

detailsSummaries.forEach(summary => {
    summary.addEventListener("click", () => {
        const detailsContent = summary.nextElementSibling;
        summary.parentElement.classList.toggle("open");
        if (detailsContent.style.display === "block") {
            detailsContent.style.display = "none";
        } else {
            detailsContent.style.display = "block";
        }
    });
});

 // Get the current date and time
 const now = new Date();
 const dateString = now.toDateString();
 
 // Update the HTML with the date and time
 const dateEl = document.getElementById("blog-date");
 dateEl.textContent = dateString;

class Animal {
    constructor(name, breed) {
        this._name = name;
        this._breed = breed;
    }
    get name() {
        return this._name;
    }

    get breed() {
        return this._breed;
    }

    Bark() {
        console.log(`${this._name} is barking woff woff!!!, ${this._name} is a ${this._breed} breed`)
    }

}

class Front extends Animal {
    constructor(name, breed, type) {
        super(name, breed);
        this._type = type;
    }
    get type() {
        return this._type;
    }
    Bark() {
        console.log(`Hello, I am ${this._name} and I am a ${this._breed}`)
    }
}

let frontier = new Animal('Amora', 'Rotweiller');
let machine = new Front('Panda', 'Lhasa Aspo', 'Dog')

let Doglist = [frontier, machine]

for (dog of Doglist) {
    dog.Bark()
}