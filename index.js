const btn = document.getElementById("themeToggle");

btn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        btn.innerHTML = "☀️";
    }else{
        btn.innerHTML = "🌙";
    }
});