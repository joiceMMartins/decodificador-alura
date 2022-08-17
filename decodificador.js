    var criptografar = document.querySelector(".criptografar-botao");
    var descriptografar = document.querySelector(".descriptografar-botao");
    var textoDigitado = document.querySelector(".texto-digitado");
    var mostraResultado = document.querySelector(".texto-resultado");
    var copiar = document.querySelector(".copiar");

    function criptografe() {
        if (textoDigitado.value == "") {
            alert("Nada foi digitado!");
        } else {
            var primeiro = textoDigitado.value;
            var result = primeiro.replaceAll("e", "enter");
            var result2 = result.replaceAll("i", "imes");
            var result3 = result2.replaceAll("a", "ai");
            var result4 = result3.replaceAll("o", "ober");
            var result5 = result4.replaceAll("u", "ufat");
            document.getElementById("sobre-resultado").style.display = "none";
            mostraResultado.value = result5;
            textoDigitado.value = "";
        }
    }

    function descriptografe(){
        if (textoDigitado.value == "") {
            alert("Nenhum texto para descriptografar.");
        } else {
            var primeiro = textoDigitado.value;
            var result = primeiro.replaceAll("enter", "e");
            var result2 = result.replaceAll("imes", "i");
            var result3 = result2.replaceAll("ai", "a");
            var result4 = result3.replaceAll("ober", "o");
            var result5 = result4.replaceAll("ufat", "u");
            mostraResultado.value = result5;
        }
    }

    function copiarTexto() {
        var copiarTextoo = mostraResultado;
        copiarTextoo.select();
        document.execCommand("copy");
    }

    criptografar.onclick = criptografe;
    copiar.onclick = copiarTexto;
    descriptografar.onclick = descriptografe;