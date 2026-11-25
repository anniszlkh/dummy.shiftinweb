const filterButtons = document.querySelectorAll(".filterButton");
const projectItems = document.querySelectorAll(".project-item");

filterButtons.forEach(button => {
    button.addEventListener("click", function() {
        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        this.classList.add("active");

        const filter = this.getAttribute("data-filter");

        projectItems.forEach(item => {
            if(filter === "*"){
                item.style.display = "block";
            }
            else if (item.matches(filter)){
                item.style.display = "block";
            }
            else{
                item.style.display = "none";
            }
        });
    });
});