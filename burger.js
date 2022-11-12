function burger() {
    const menu = document.getElementById("container");
    const more = document.getElementById("burger");
    menu.classList.toggle("new");
    more.classList.toggle("change");
}

let icons,length;
document.getElementById("input").addEventListener("keydown", function(e){
    if(e.key === "Enter" && (document.getElementById("input").value).trimStart().trimEnd() !== ""){
        const newLi= document.getElementById("input").value;
        document.getElementById("list-items").innerHTML += `<li>${newLi}<i class="fa-solid fa-xmark"></i></li>`;
        document.getElementById("input").value = "";
        if(document.querySelectorAll("#list-items li").length >= 1){
            document.querySelector("#trash").classList.add("display-block")
        }
        icons = document.querySelectorAll(".fa-xmark");
        length = document.querySelectorAll(".fa-xmark").length;
        for(let i = 0; i< length; i++){
            icons[i].addEventListener("click", function(e){
                length--;
                if(length === 0){
                    document.querySelector("#trash").classList.remove("display-block")
                }
                document.getElementById("list-items").removeChild(e.target.closest("li"));
            })
        };
    }
});

document.getElementById("trash").addEventListener("click", function(){
    document.getElementById("list-items").innerHTML = "";
    document.querySelector("#trash").classList.remove("display-block");
});



