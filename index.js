
var countClick = 0;

function cambiarImagen() {
    if (countClick == 1){
        document.getElementById("imagen").src = "https://randomuser.me/api/portraits/women/84.jpg";
        countClick = 0;
    }else{
        document.getElementById("imagen").src = "https://randomuser.me/api/portraits/women/59.jpg";
        countClick++;
        
    }
}
