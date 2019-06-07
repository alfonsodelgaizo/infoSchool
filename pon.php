<?php
//$codiceIstituto= $_GET["codiceIstituto"];

//$json_url = "http://localhost:8501/pon?codiceIstituto=$codiceIstituto";
//echo $decoded['result'][$i]["descrizioneAzione"]."<br/>";
?>


<!DOCTYPE html>
<html lang="en">

<head>
	<link rel="icon" href="img/walk1.png" type="image/png">
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
  

	<title>infoSchool</title>

	<!-- Google font -->
	<link href="https://fonts.googleapis.com/css?family=Montserrat:400,700%7CVarela+Round" rel="stylesheet">

	<!-- Bootstrap -->
	<link type="text/css" rel="stylesheet" href="css/bootstrap.min.css" />


	<!-- Owl Carousel -->
	<link type="text/css" rel="stylesheet" href="css/owl.carousel.css" />
	<link type="text/css" rel="stylesheet" href="css/owl.theme.default.css" />

	<!-- Magnific Popup -->
	<link type="text/css" rel="stylesheet" href="css/magnific-popup.css" />

	<!-- Font Awesome Icon -->
	<link rel="stylesheet" href="css/font-awesome.min.css">

	<!-- Custom stlylesheet -->
	<link type="text/css" rel="stylesheet" href="css/style.css" />

	<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
	<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
	<!--[if lt IE 9]>
		<script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
		<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
    
      
    <style>
        #over img {
        margin-left: auto;
        margin-right: auto;
         display: block;
        }
        
        .checked {
			  color: orange;
			}

            .suff {
			  color: #9ACD32;
			}

            .bad {
			  color: #DC143C;
			}
            
   </style>

</head>
<body>

	<!-- Header -->
	<header>

		<!-- Nav -->
		<nav id="nav" class="navbar">
			<div class="container">

				<div class="navbar-header">
					
					<!-- Collapse nav button -->
					<div class="nav-collapse">
						<span></span>
					</div>
					<!-- /Collapse nav button -->
				</div>

				<!--  Main navigation  -->
				<ul class="main-nav nav navbar-nav navbar-right">
					<li><a href="start.php#home">Home</a></li>
					
					<li><a href="start.php#service">Servizi</a></li>
				
					<li><a href="start.php#team">Sviluppatore</a></li>
					<li><a href="start.php#contact">Contatti</a></li>
				</ul>
				<!-- /Main navigation -->

			</div>
		</nav>
		<!-- /Nav -->
		
		<div  id="over" class="header-wrapper sm-padding bg-grey">
       <img src="./img/infoSchool.png" width="300" height="300">	
       </div>  
        
        <?php
        
        $codiceIstituto= $_GET["codiceIstituto"];
        $nomeIstituto= $_GET["nomeIstituto"];
        


            //echo "<img src=\"$url3\">";

        ?>

	
	</header>
	<!-- /Header -->

	<!-- Blog -->
	<div id="blog" class="section md-padding">

		<!-- Container -->
		<div class="container">

			<!-- Row -->
			<div class="row">

				<!-- Main -->
				<main id="main" class="col-md-9">
					<div class="blog">
						
						



						<!-- blog comments -->
						<div class="blog-comments">
							<h3 class="title"><?php echo "$nomeIstituto"?></h3>

                            

                            <?php
                            // SCRAPE RECENSIONI TRUSTPILOT
                           
                               


$json_url = "http://localhost:8501/pon?codiceIstituto=$codiceIstituto";
$json = file_get_contents($json_url);
$decoded = json_decode($json, TRUE);

$cnt=count($decoded['result']);

for($i=0;$i<$cnt;$i++){
    $descrizione=$decoded['result'][$i]["descrizioneAzione"];
    $titoloProgetto=$decoded['result'][$i]["titoloProgetto"];
    $descrizioneProgetto=$decoded['result'][$i]["descrizioneProgetto"];
    $data=$decoded['result'][$i]["dataProtocollo"];
    $tipoFondo=$decoded['result'][$i]["tipoFondo"];
    $titoloSottoAzione=$decoded['result'][$i]["descrizioneSottoAzione"];


                                         
    echo "
    <div class=\"media\">
    <div class=\"media-left\">
    <img class=\"media-object\" src=\"./img/pon.png\" alt=\"\" width=\"90\" height=\"70\">
    </div>
        <div class=\"media-body\">";
        echo("<h4 class=\"media-heading\">$titoloProgetto - $data - $tipoFondo 
        <span class=\"time\">
        </span></h4>
        ");


       echo"
       <br>
       <p><h5>TIPO:</h5>$titoloSottoAzione</p> 
       <br>
       <br>
       <p><h5>AZIONE :</h5>$descrizione</p> 
       <br>       
       <p> <h5>DESCRIZIONE PROGETTO :</h5> $descrizioneProgetto </p>
       ";
    
       
    
           

                     
       echo"</div>
        </div>
     ";



//echo "<pre>";
//echo $decoded['result'][$i]["denominazioneIstituto"]."<br/>";
//echo "</pre>";
}
                        
                                        

                            
                         ?>

			

						</div>
						<!-- /blog comments -->

					</div>
				</main>
				<!-- /Main -->


				<!-- Aside -->
				<aside id="aside" class="col-md-3">

					<!-- Search -->
					<div class="widget">
						<div class="widget-search">
					
						</div>
					</div>
					<!-- /Search -->

					<!-- Category -->
					<div class="widget">
						<h3 class="title">SERVIZI ONLINE UTILI</h3>
						<div class="widget-category">
                            <a href="https://www.scuola.net/">Scuola.net<span class="fa fa-info-circle"></span></a>
                            <a href="https://www.dati.gov.it/">Dati.gov.it<span class="fa fa-database"></span></a>
							<a href="https://www.orizzontescuola.it/">OrizzonteScuola<span class="fa fa-quote-right"></span></a>
							<a href="https://www.miur.gov.it/web/guest/scuola">Miur<span class="fa fa-search"></span></a>
						</div>
					</div>
					<!-- /Category -->


				</aside>
				<!-- /Aside -->

			</div>
			<!-- /Row -->

		</div>
		<!-- /Container -->

	</div>
	<!-- /Blog -->

	<!-- Footer -->
	<footer id="footer" class="sm-padding bg-dark">

		<!-- Container -->
		<div class="container">
				<img class="img-responsive center-block" src="img/infoSchool.png" alt="logo" height="150" width="150">

			<!-- Row -->
			<div class="row">

				<div class="col-lg-12">

					
					<!-- footer copyright -->
					<div class="footer-copyright">
						<p>Copyright © 2019. All Rights Reserved. Designed by Alfonso Del Gaizo</p>
					</div>
					<!-- /footer copyright -->

				</div>

			</div>
			<!-- /Row -->

		</div>
		<!-- /Container -->

	</footer>
	<!-- /Footer -->

	<!-- Back to top -->
	<div id="back-to-top"></div>
	<!-- /Back to top -->

	<!-- Preloader -->
	<div id="preloader">
		<div class="preloader">
			<span></span>
			<span></span>
			<span></span>
			<span></span>
		</div>
	</div>
	<!-- /Preloader -->




	<!-- jQuery Plugins -->
	<script type="text/javascript" src="js/jquery.min.js"></script>
	<script type="text/javascript" src="js/bootstrap.min.js"></script>
	<script type="text/javascript" src="js/owl.carousel.min.js"></script>
	<script type="text/javascript" src="js/jquery.magnific-popup.js"></script>
	<script type="text/javascript" src="js/main.js"></script>

    </body>

    </html>