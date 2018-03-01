$(document).ready(function () {
    $("#btn-galeria").on("click", function () {
        var fotos = "<div id='fotos-galeria'>";
        $.ajax({

            url: "php/imagenesGaleria.php",
            dataType: "json",
            success: function (images) {

                for (var i = 2; i < images.length; i++) {

                    fotos += '   <div id="' + images[i] + '" class="card">  ' +
                            ' <img src="./resources/images/galeria/' + images[i] + '" class="imagen-galeria" alt="">  ' +
                            '  </div>';




                }
                fotos += '</div>';
                $("#contenedor").html("");
                $("#contenedor").append(fotos);
                $("#fotos-galeria").on("click",".card", function () {
                    alert($(this).attr("id"));
                });
            }

        });

    });

});


