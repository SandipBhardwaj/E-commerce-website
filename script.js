document.addEventListener("DOMContentLoaded", () => {
    // Navbar toggle for mobile responsiveness
    const navbar = document.getElementById("navbar");
    const menuToggle = document.createElement("div");
    menuToggle.innerHTML = "<i class='fas fa-bars'></i>";
    menuToggle.classList.add("menu-toggle");
    document.getElementById("header").appendChild(menuToggle);

    menuToggle.addEventListener("click", () => {
        navbar.classList.toggle("active");
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll("#navbar a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const sectionId = this.getAttribute("href");
            if (sectionId !== "#") {
                document.querySelector(sectionId).scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    // Cart functionality
    let cart = [];

    document.querySelectorAll(".pro a").forEach((button, index) => {
        button.addEventListener("click", (e) => {
            e.preventDefault();
            let product = document.querySelectorAll(".pro")[index];
            let productName = product.querySelector("h5").textContent;
            let productPrice = product.querySelector("h4").textContent;
            let productImage = product.querySelector("img").src;

            let productData = {
                name: productName,
                price: productPrice,
                image: productImage
            };

            cart.push(productData);
            localStorage.setItem("cart", JSON.stringify(cart));
            alert(`${productName} added to cart!`);
        });
    });

    // Lightbox effect for product images
    document.querySelectorAll(".pro img").forEach(img => {
        img.addEventListener("click", () => {
            const lightbox = document.createElement("div");
            lightbox.id = "lightbox";
            document.body.appendChild(lightbox);
            
            const imgElement = document.createElement("img");
            imgElement.src = img.src;
            lightbox.appendChild(imgElement);

            lightbox.addEventListener("click", () => {
                lightbox.remove();
            });
        });
    });
});
