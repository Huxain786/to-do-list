let input = document.getElementById("inp");
let text = document.querySelector(".text");

function Add(){
    if (input.value =="") {
        alert("plese enter text")
    }else{
        let newEle = document.createElement("ul");
        newEle.innerHTML=`${input.value} <i class="ri-delete-bin-fill"></i> `;
        text.appendChild(newEle);
        input.value="";
        newEle.querySelector("i").addEventListener("click" , remove);
        function remove(){
            newEle.remove()
        }

    }
}