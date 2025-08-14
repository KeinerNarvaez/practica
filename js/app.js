var sonido = new Audio();
sonido.src= `./sonido.mp3`;
function ejercicio5() {
    sonido.play();
    let par=0;
    let impar=0;
    let contar1=1;
    document.getElementById('resultado').innerHTML='';
    document.getElementById('cantidad').innerHTML='';
    for (contar1; contar1 <= parseInt(document.getElementById('texto').value); contar1++) {
        for (let contar2 = 1; contar2 <= 5; contar2++) {
            let resultado = contar1 * contar2;
            if (resultado%2==0) {
                document.getElementById('resultado').innerHTML+=`
                <div class="separacion">
                <p>`+contar1+`X`+contar2+`=`+resultado+` Buzz</p>
                </div>`
                par++
            } else{
                document.getElementById('resultado').innerHTML+=`
                <div class="separacion">
                <p>`+contar1+`X`+contar2+`=`+resultado+ ` Bass</p>
                </div>
                <style>
                #resultado{
                    overflow: scroll;
                    background-color: brown;
                    box-shadow: 3px 3px 20px;
                }
                </style>`
                impar++
            }
        }
        
    }
    document.getElementById('cantidad').innerHTML+=`
    <style>
    #cantidad{
      border: 1px solid rgb(163, 142, 73);
      width: 410px;
      height: auto;
      box-shadow: 3px 3px 20px;
      background-color: rgb(189, 150, 66);
    }
    #cantidad strong,h5{
      text-align: justify;
      margin-bottom: -26px;
      margin-top: -13px; 
      margin-left: 1px;
      margin-right: 1px;
    }
    </style>
    `
    document.getElementById('cantidad').innerHTML+=`<strong><h5>cantidad de pares: `+par+`</h5></strong><br>`;
    document.getElementById('cantidad').innerHTML+='<strong><h5>cantidad de impares:  '+impar+'</h5></strong>';
    return false;

}
