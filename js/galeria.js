$(document).ready(function () {
    $("#btn-galeria").on("click", function () {
        var fotos = "<div id='fotos-galeria'>";
        fotos += '   <div id="' + '0004.jpg' + '" class="card">  ' +
                ' <img src="./resources/images/galeria/' + '0004.jpg' + '" class="imagen-galeria" alt="">  ' +
                '  </div>';
        fotos += '   <div id="' + '0005.jpg' + '" class="card">  ' +
                ' <img src="./resources/images/galeria/' + '0005.jpg' + '" class="imagen-galeria" alt="">  ' +
                '  </div>';
        fotos += '   <div id="' + '0006.jpg' + '" class="card">  ' +
                ' <img src="./resources/images/galeria/' + '0006.jpg' + '" class="imagen-galeria" alt="">  ' +
                '  </div>';
        fotos += '   <div id="' + '0007.jpg' + '" class="card">  ' +
                ' <img src="./resources/images/galeria/' + '0007.jpg' + '" class="imagen-galeria" alt="">  ' +
                '  </div>';
        fotos += '   <div id="' + '0001.jpg' + '" class="card">  ' +
                ' <img src="./resources/images/galeria/' + '0001.jpg' + '" class="imagen-galeria" alt="">  ' +
                '  </div>';
        fotos += '   <div id="' + '0002.jpg' + '" class="card">  ' +
                ' <img src="./resources/images/galeria/' + '0002.jpg' + '" class="imagen-galeria" alt="">  ' +
                '  </div>';
        fotos += '   <div id="' + '0003.jpg' + '" class="card">  ' +
                ' <img src="./resources/images/galeria/' + '0003.jpg' + '" class="imagen-galeria" alt="">  ' +
                '  </div>';
        fotos += '</div>';
        fotos +=  '<!-- Modal -->' +
                    '<div id="myModal" class="modal fullscreen-modal fade" role="dialog">' +
                    '  <div class="modal-dialog">' +
                    '     <!-- Modal content-->' +
                    '    <div class="modal-content">' +
                    
                    '          <button type="button" class="close" data-dismiss="modal">&times;</button>' +
                    ' </div>' +
                    '<div class="img-modal" >'+
                    ' <img id="ModalImage" src="./resources/images/galeria/' + '0003.jpg' + '" class="imagen-modal" alt="">  ' +
                    '</div>'+
                    '</div>' +
                    '</div>';
        $("#contenedor").html("");
        $("#contenedor").append(fotos);
        $("#fotos-galeria").on("click", ".card", function () {
            var modalID =$(this).attr("id");
            var modalImg = './resources/images/galeria/' + modalID ;
            $("#ModalImage").attr("src",modalImg);
            $("#myModal").modal("show");
        });
//        
//        var fotos = '<div class="galleria">' +
//                '<img src="resources/images/galeria/0001.jpg" alt=""/>' +
//                '<img src="resources/images/galeria/0002.jpg" alt=""/>' +
//                '<img src="resources/images/galeria/0003.jpg" alt=""/>' +
//                '<img src="resources/images/galeria/0004.jpg" alt=""/>' +
//                '<img src="resources/images/galeria/0005.jpg" alt=""/>' +
//                '<img src="resources/images/galeria/0006.jpg" alt=""/>' +
//                '<img src="resources/images/galeria/0007.jpg" alt=""/>' +
//                '</div>';
//        $("#contenedor").html("");
//        $("#contenedor").append(fotos);
//
//        (function () {
//            Galleria.loadTheme('vendor/galleria/themes/classic/galleria.classic.min.js');
//            Galleria.configure({
//                carousel: false
//            });
//            Galleria.run('.galleria');

//        }());
    });
});




