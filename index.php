<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <meta charset="UTF-8">
        <title></title>
    </head>
    <body>
        <!-- Font Awesome -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
        <!-- Bootstrap core CSS -->
        <link href="./vendor/css/bootstrap.min.css" rel="stylesheet">
        <!-- Material Design Bootstrap -->
        <link href="./vendor/css/mdb.css" rel="stylesheet">
        <!-- CUSTOM -->
        <link href="styles/css/main.css" rel="stylesheet" type="text/css"/>
        <link rel="shortcut icon" type="image/png" href="/favicon.png"/>
        <div class="contenedor">
            <!--Navbar-->

            <nav class="cabecero navbar navbar-expand-lg navbar-dark elegant-color-dark">

                <!-- Navbar brand -->
                <a class="navbar-brand" href="#">
                    <span class="marca">Yago Gómez</span><b class="marca-slogan">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Peluqueros</b></a>

                <!-- Collapse button -->
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav" aria-controls="basicExampleNav"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <!-- Collapsible content -->
                <div class="collapse navbar-collapse" id="basicExampleNav">

                    <!-- Links -->
                    <ul class="navbar__nav ml-auto">
                        <li class="nav__item active">
                            <a class="nav__link" href="#">Inicio     
                        </li>
                        <li class="nav__item">
                            <a class="nav__link" href="#"> Contacto</a> 
                        </li>
                        <li class="nav__item">
                            <a class="nav__link" href="#">Servicios</a>
                        </li>
                        <li class="nav__item">
                            <a class="nav__link" href="#">Galeria</a>
                        </li>
                        <li class="nav__item">
                           <a class="nav__link" href="https://www.facebook.com/YagoGomezPeluqueros/"><i class="fa fa-facebook fa-lg  mr-md-5 mr-3 fa-2x"> </i></a>
                        </li>

                    </ul>
                    <!-- Links --> 
                </div>
                <!-- Collapsible content -->

            </nav>
            <!--/.Navbar-->


            <div class="carrusel">
                <!--Carousel Wrapper-->
                <div id="carousel-example-1z" class="carousel slide carousel-fade" data-ride="carousel">
                    <!--Indicators-->
                    <ol class="carousel-indicators">
                        <li data-target="#carousel-example-1z" data-slide-to="0" ></li>
                        <li data-target="#carousel-example-1z" data-slide-to="1" class="active"></li>
                        <li data-target="#carousel-example-1z" data-slide-to="2"></li>
                    </ol>
                    <!--/.Indicators-->
                    <!--Slides-->
                    <div class="carousel-inner" role="listbox">
                        <!--First slide-->
                        <div class="carousel-item active" style="background-image:url(resources/images/carrusel/yago1.jpg) "> </div>
                        <!--/First slide-->
                        <!--Second  slide-->
                        <div class="carousel-item" style="background-image:url(resources/images/carrusel/yago2.jpg) "></div>
                        <!--/Second slide-->
                        <!--Third  slide-->
                        <div class="carousel-item" style="background-image:url(resources/images/carrusel/yago3.jpg) "></div>
                        <!--/Third slide-->
                    </div>
                    <!--/.Slides-->
                    <!--Controls-->
                    <a class="carousel-control-prev" href="#carousel-example-1z" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carousel-example-1z" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                    <!--/.Controls-->
                </div>
                <!--/.Carousel Wrapper-->
            </div>
            <!--Footer-->
            <footer class="footer page-footer font-small elegant-color-dark pt-0">

                <!--Footer Links-->
                <div class="container">

                    <!--First row-->
                    <div class="row">

                        <!--First column-->
                        <div class="col-md-12">

                            <div class="mb-5 flex-center">

                                <!--Facebook-->
                                <a class="fb-ic"><i class="fa fa-facebook fa-lg white-text mr-md-5 mr-3 fa-2x"> </i></a>
                                <!--Twitter-->
                                <a class="tw-ic"><i class="fa fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i></a>
                                <!--Google +-->
                                <a class="gplus-ic"><i class="fa fa-google-plus fa-lg white-text mr-md-5 mr-3 fa-2x"> </i></a>
                                <!--Linkedin-->
                                <a class="li-ic"><i class="fa fa-linkedin fa-lg white-text mr-md-5 mr-3 fa-2x"> </i></a>
                                <!--Instagram-->
                                <a class="ins-ic"><i class="fa fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i></a>
                                <!--Pinterest-->
                                <a class="pin-ic"><i class="fa fa-pinterest fa-lg white-text fa-2x"> </i></a>
                            </div>
                        </div>
                        <!--/First column-->
                    </div>
                    <!--/First row-->
                </div>
                <!--/Footer Links-->

                <!--Copyright-->
                <div class="footer-copyright py-3 text-center">
                    <div class="container-fluid">
                        © 2018 Copyright:  Yago Gómez</a>
                    </div>
                </div>
                <!--/Copyright-->

            </footer>
            <!--/Footer-->   
        </div>





        <script type="text/javascript" src="./vendor/js/jquery-3.2.1.min.js"></script>
        <!-- Bootstrap tooltips -->
        <script type="text/javascript" src="./vendor/js/popper.min.js"></script>
        <!-- Bootstrap core JavaScript -->
        <script type="text/javascript" src="./vendor/js/bootstrap.min.js"></script>
        <!-- MDB core JavaScript -->
        <script type="text/javascript" src="./vendor/js/mdb.min.js"></script>
    </body>
</html>
