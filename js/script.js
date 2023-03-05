function getScore() {
    const question = document.getElementById("questions").value;
    const score = document.getElementById("score").value;

    if (question <= 0 || score <= 0 ) {

        alert("Informe um valor valido!");

    }else {

       const result = (score/question)*100;
       document.getElementById("container").remove();
       document.querySelector("button").remove();
       const p = document.createElement("p");
       const p_content = document.createTextNode("Seu acerto foi de " + result.toFixed(2)+ "%");
       p.id = "result";
       p.appendChild(p_content);
       document.body.appendChild(p);

    }
}