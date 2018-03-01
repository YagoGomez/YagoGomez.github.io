<?php
     
    $directory="../resources/images/galeria";
    $dirint = dir($directory);
    $imagenes =[];
    while (($archivo = $dirint->read()) !== false)
    {
       array_push( $imagenes, $archivo);
    }
    $dirint->close();
    
    echo json_encode($imagenes,true);

