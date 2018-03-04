$(document).ready(function () {
    $("#btn-galeria").on("click", function () {
        var fotos = "<div id='fotos-galeria'>";


        fotos += '   <div id="' + '0004.jpg' + '" class="card">  ' +
                ' <img src="./resources/images/galeria/' + '0004.jpg' + '" class="imagen-galeria" alt="">  ' +
                '  </div>';
        fotos += '   <div id="' + '20180225_184137.jpg' + '" class="card">  ' +
                ' <img src="./resources/images/galeria/' + '20180225_184137.jpg' + '" class="imagen-galeria" alt="">  ' +
                '  </div>';
        fotos += '   <div id="' + '20180225_184229.jpg' + '" class="card">  ' +
                ' <img src="./resources/images/galeria/' + '20180225_184229.jpg' + '" class="imagen-galeria" alt="">  ' +
                '  </div>';
        fotos += '   <div id="' + '20180225_184614.jpg' + '" class="card">  ' +
                ' <img src="./resources/images/galeria/' + '20180225_184614.jpg' + '" class="imagen-galeria" alt="">  ' +
                '  </div>';
        fotos += '   <div id="' + '0001.jpg' + '" class="card">  ' +
                ' <img src="./resources/images/galeria/' + '0001.jpg' + '" class="imagen-galeria" alt="">  ' +
                '  </div>';
        fotos += '   <div id="' + '0002' + '" class="card">  ' +
                ' <img src="./resources/images/galeria/' + '0002.jpg' + '" class="imagen-galeria" alt="">  ' +
                '  </div>';
        fotos += '   <div id="' + '0003.jpg' + '" class="card">  ' +
                ' <img src="./resources/images/galeria/' + '0003.jpg' + '" class="imagen-galeria" alt="">  ' +
                '  </div>';





        fotos += '</div>';
        $("#contenedor").html("");
        $("#contenedor").append(fotos);
        $("#fotos-galeria").on("click", ".card", function () {
            alert($(this).attr("id"));

        });

    });

});




