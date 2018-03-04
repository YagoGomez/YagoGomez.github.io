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
                    '<div id="myModal" class="modal fade" role="dialog">' +
                    '  <div class="modal-dialog modal-lg">' +
                    '     <!-- Modal content-->' +
                    '    <div class="modal-content">' +
                    '       <div class="modal-header">' +
                    '          <button type="button" class="close" data-dismiss="modal">&times;</button>' +
                    
                    '    </div>' +
                    '   <div class="modal-body">' +
                    ' <img id="ModalImage" src="./resources/images/galeria/' + '0001.jpg' + '" class="imagen-galeria" alt="">  ' +
                    ' </div>' +
                    ' <div class="modal-footer">' +
                    '    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>' +
                    ' </div>' +
                    ' </div>' +
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

    });

});




