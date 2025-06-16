let fotoPerfil = document.getElementById("foto-perfil");
let inputFile = document.getElementById("input-file");

inputFile.onchange = function(){
    fotoPerfil.src = URL.createObjectURL(inputFile.files[0]);
}