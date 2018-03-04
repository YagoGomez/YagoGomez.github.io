$(document).ready(function () {
    $("#btn-galeria").on("click", function () {
        var fotos = "<div id='fotos-galeria'>";
//        $.ajax({
//
//            url: "php/imagenesGaleria.php",
//            dataType: "json",
//            success: function (images) {
//
//                for (var i = 2; i < images.length; i++) {

        fotos += '   <div id="' + '20170717_155914.jpg' + '" class="card">  ' +
                ' <img src="./resources/images/galeria/' + '20170717_155914.jpg' + '" class="imagen-galeria" alt="">  ' +
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
        fotos += '   <div id="' + 'ANA-Y-LUIS-90.jpg' + '" class="card">  ' +
                ' <img src="./resources/images/galeria/' + 'ANA-Y-LUIS-90.jpg' + '" class="imagen-galeria" alt="">  ' +
                '  </div>';
        fotos += '   <div id="' + 'MG_9918.jpg' + '" class="card">  ' +
                ' <img src="./resources/images/galeria/' + 'MG_9918.jpg' + '" class="imagen-galeria" alt="">  ' +
                '  </div>';
        fotos += '   <div id="' + 'novios_boda.jpg' + '" class="card">  ' +
                ' <img src="./resources/images/galeria/' + 'novios_boda.jpg' + '" class="imagen-galeria" alt="">  ' +
                '  </div>';





        fotos += '</div>';
        $("#contenedor").html("");
        $("#contenedor").append(fotos);
        $("#fotos-galeria").on("click", ".card", function () {
            alert($(this).attr("id"));

        });

    });

});




