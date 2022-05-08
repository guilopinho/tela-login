let form = document.querySelector(".form");

form.addEventListener('submit',function(e){
    e.preventDefault();
    let loading = document.querySelector('.loading');
    loading.style.display = "block";
    setInterval(() => {
        form.classList.add("fade-out");
    },1000);
})