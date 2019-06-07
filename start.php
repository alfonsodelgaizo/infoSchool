<!DOCTYPE html>
<html lang="en">

<head>
	<link rel="icon" href="img/infoSchool.png" type="image/png">
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
</head>

<body>
	<!-- Header -->
	<header id="home">
		<!-- Background Image -->
		<div class="bg-img" style="background-image: url('./img/SfondoInfo.jpg');">
			<div class="overlay"></div>
		</div>
		<!-- /Background Image -->

		<!-- Nav -->
		<nav id="nav" class="navbar nav-transparent">
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
					<li><a href="#home">Home</a></li>
					<li><a href="#service">Servizi</a></li>
					<li><a href="#team">Sviluppatore</a></li> 
					<li><a href="#contact">Contatti</a></li>
				</ul>
				<!-- /Main navigation -->

			</div>
		</nav>
		<!-- /Nav -->

		<!-- home wrapper -->
		<div class="home-wrapper">
			<div class="container">
				<div class="row">

					<!-- home content -->
					<div class="col-md-10 col-md-offset-1">
						<div class="home-content">
							<h1 class="white-text">infoSchool</h1>
							<p class="white-text">Piattaforma dedicata interamente agli istituti scolastici su territorio italiano. Incomincia subito con la ricerca delle scuole e delle relative informazioni.
							</p>
							<br>
							<img class="img-responsive center-block" src="img/infoSchool.png" alt="logo" height="350" width="350">
	
							
						</div>
					</div>
					<!-- /home content -->

				</div>
			</div>
		</div>
		<!-- /home wrapper -->

	</header>
	<!-- /Header -->

	<!-- About -->
	<div id="about" class="section md-padding">

		<!-- Container -->
		<div class="container">

			<!-- Row -->
			<div class="row">

				<!-- Section header -->
				<div class="section-header text-center">
					<h2 class="title">Trova Scuole</h2>
				</div>
              <div>
		<div class="col-xs-4">
        <form action="routing.php" method="post" >
					<div class="form-group row">
					  <div class="col-xs-3" >
					  <label>Provincia</label>

                        <select name="citta" >
                        <option value="AGRIGENTO" selected="selected">AGRIGENTO </option>
                        <option value="ALESSANDRIA">ALESSANDRIA</option>
                        <option value="AOSTA">AOSTA </option>
                        <option value="AREZZO">AREZZO </option>
                        <option value="ASTI">ASTI </option>
                        <option value="AVELLINO">AVELLINO </option>
                        <option value="BARI">BARI </option>
                        <option value="BELLUNO">BELLUNO </option>
                        <option value="BENEVENTO">BENEVENTO </option>
                        <option value="BERGAMO">BERGAMO </option>
                        <option value="BIELLA">BIELLA </option>
                        <option value="BOLOGNA">BOLOGNA </option>
                        <option value="BOLZANO">BOLZANO </option>
                        <option value="BRESCIA">BRESCIA </option>
                        <option value="BRINDISI">BRINDISI </option>
                        <option value="CAGLIARI">CAGLIARI </option>
                        <option value="CALTANISSETTA">CALTANISSETTA </option>
                        <option value="CAMPOBASSO">CAMPOBASSO </option>
                        <option value="CASERTA">CASERTA </option>
                        <option value="CATANIA">CATANIA </option>
                        <option value="CATANZARO">CATANZARO </option>
                        <option value="CHIETI">CHIETI </option>
                        <option value="COMO">COMO </option>
                        <option value="COSENZA">COSENZA </option>
                        <option value="CREMONA">CREMONA </option>
                        <option value="CROTONE">CROTONE </option>
                        <option value="CUNEO">CUNEO </option>
                        <option value="ENNA">ENNA </option>
                        <option value="FERMO">FERMO </option>
                        <option value="FERRARA">FERRARA </option>
                        <option value="FIRENZE">FIRENZE </option>
                        <option value="FOGGIA">FOGGIA </option>
                        <option value="FROSINONE">FROSINONE </option>
                        <option value="GENOVA">GENOVA </option>
                        <option value="GORIZIA">GORIZIA </option>
                        <option value="GROSSETO">GROSSETO </option>
                        <option value="IMPERIA">IMPERIA </option>
                        <option value="ISERNIA">ISERNIA </option>
                        <option value="LATINA">LATINA </option>
                        <option value="LECCE">ISERNIA </option>
                        <option value="LECCO">ISERNIA </option>
                        <option value="LIVORNO">ISERNIA </option>
                        <option value="LODI">LODI </option>
                        <option value="LUCCA">LUCCA </option>
                        <option value="MACERATA">MACERATA</option>
                        <option value="MANTOVA">MANTOVA </option>
                        <option value="MATERA">MATERA </option>
                        <option value="MESSINA">MESSINA </option>
                        <option value="MILANO">MILANO</option>
                        <option value="MODENA">MODENA</option>
                        <option value="MONZA">MONZA </option>
                        <option value="NAPOLI">NAPOLI </option>
                        <option value="NOVARA">NOVARA </option>
                        <option value="NUORO">NUORO </option>
                        <option value="ORISTANO">ORISTANO</option>
                        <option value="PADOVA">PADOVA</option>
                        <option value="PALERMO">PALERMO</option>
                        <option value="PARMA">PARMA</option>
                        <option value="PAVIA">PAVIA</option>
                        <option value="PERUGIA">PERUGIA</option>
                        <option value="PESCARA">PESCARA</option>
                        <option value="PIACENZA">PIACENZA</option>
                        <option value="PISA">PISA</option>
                        <option value="PISTOIA">PISTOIA</option>
                        <option value="PORDENONE">PORDENONE</option>
                        <option value="POTENZA">POTENZA</option>
                        <option value="PRATO">PRATO</option>
                        <option value="RAGUSA">RAGUSA</option>
                        <option value="RAVENNA">RAVENNA</option>
                        <option value="RIETI">RIETI</option>
                        <option value="RIMINI">RIMINI</option>
                        <option value="ROMA">ROMA</option>
                        <option value="ROVIGO">ROVIGO</option>
                        <option value="SALERNO">SALERNO</option>
                        <option value="SASSARI">SASSARI</option>
                        <option value="SAVONA">SAVONA</option>
                        <option value="SIENA">SIENA</option>
                        <option value="SIRACUSA">SIRACUSA</option>
                        <option value="SONDRIO">SONDRIO</option>
                        <option value="TARANTO">TARANTO</option>
                        <option value="TERAMO">TERAMO</option>
                        <option value="TERNI">TERNI</option>
                        <option value="TORINO">TORINO</option>
                        <option value="OGLIASTRA">OGLIASTRA</option>
                        <option value="TRAPANI">TRAPANI</option>
                        <option value="TRENTO">TRENTO</option>
                        <option value="TREVISO">TREVISO</option>
                        <option value="TRIESTE">TRIESTE</option>
                        <option value="UDINE">UDINE</option>
                        <option value="VARESE">VARESE</option>
                        <option value="VENEZIA">VENEZIA</option>
                        <option value="VERCELLI">VERCELLI</option>
                        <option value="VERONA">VERONA</option>
                        <option value="VICENZA">VICENZA</option>
                        <option value="VITERBO">VITERBO</option>
			 </select>
	          </div>
                      
					</div>
					<button type="submit" class="btn btn-info">Cerca</button>
	</div>
                  </form>
				</div>
				<!-- /Section header -->
              <!-- //////////// QUI DENTRO DEVO INSERIRE LA BARRA DI RICERCA PER I LAVORI //////////// -->

			</div>
			<!-- /Row -->

		</div>
		<!-- /Container -->

	</div>
	<!-- /About -->




	<!-- Service -->
	<div id="service" class="section md-padding bg-info">

		<!-- Container -->
		<div class="container">

			<!-- Row -->
			<div class="row">

				<!-- Section header -->
				<div class="section-header text-center">
					<h2 class="title">SERVIZI OFFERTI</h2>
				</div>
				<!-- /Section header -->

				<!-- service -->
				<div class="col-md-4 col-sm-6">
					<div class="service">
						<i class="fa fa-search"></i>
						<h3>RICERCA SCUOLE</h3>
						<p>Trova tutte le informazioni di base di ogni scuola presente su territorio italiano</p>
					</div>
				</div>
				<!-- /service -->

				<!-- service -->
				<div class="col-md-4 col-sm-6">
					<div class="service">
						<i class="fa fa-pencil"></i>
						<h3>VALUTAZIONE STUDENTI PER OGNI ISTITUTO</h3>
						<p>Sezione dedicata alle informazioni relative al voto medio per ogni istituto raggiunta degli studenti</p>
					</div>
				</div>
				<!-- /service -->

				<!-- service -->
				<div class="col-md-4 col-sm-6">
					<div class="service">
						<i class="fa fa-cogs"></i>
						<h3>PROGETTI PON APPROVATI</h3>
						<p>Sezione dedicata ai progetti PON approvati per ogni istituto con relative descrizioni dell'utilizzo dei fondi.</p>
					</div>
				</div>
				<!-- /service -->


			</div>
			<!-- /Row -->

		</div>
		<!-- /Container -->

	</div>
	<!-- /Service -->




	<!-- Numbers -->
	<div id="numbers" class="section sm-padding">

		<!-- Background Image -->
		<div class="bg-img" style="background-image: url('./img/sfondo15.jpg');">
			<div class="overlay"></div>
		</div>
		<!-- /Background Image -->

		<!-- Container -->
		<div class="container">

			<!-- Row -->
			<div class="row">

				<!-- number -->
				<div class="col-sm-3 col-xs-6">
					<div class="number">
						<i class="fa fa-university"></i>
						<h3 class="white-text"><span class="counter">50K+</span></h3>
						<span class="white-text">ISTITUTI</span>
					</div>
				</div>
				<!-- /number -->

				<!-- number -->
				<div class="col-sm-3 col-xs-6">
					<div class="number">
						<i class="fa fa-signal"></i>
						<h3 class="white-text"><span class="counter">50K+</span></h3>
						<span class="white-text">VALUTAZIONI</span>
					</div>
				</div>
				<!-- /number -->

				<!-- number -->
				<div class="col-sm-3 col-xs-6">
					<div class="number">
						<i class="fa fa-gear"></i>
						<h3 class="white-text"><span class="counter">30K+</span></h3>
						<span class="white-text">PROGETTI PON</span>
					</div>
				</div>
				<!-- /number -->

				<!-- number -->
				<div class="col-sm-3 col-xs-6">
					<div class="number">
						<i class="fa fa-database"></i>
						<h3 class="white-text"><span class="counter">130K+</span></h3>
						<span class="white-text">ELEMENTI TOTALI</span>
					</div>
				</div>
				<!-- /number -->


				

			</div>
			<!-- /Row -->

		</div>
		<!-- /Container -->

	</div>
	<!-- /Numbers -->

	
	<!-- Testimonial -->
	<div id="testimonial" class="section md-padding">

		<!-- Background Image -->
		<div class="bg-img" style="background-image: url('./img/sfondoInfoSchool.jpg');">
			<div class="overlay">
			<img class="img-responsive center-block" src="img/infoSchool.png" alt="logo" height="200" width="200">

			</div>
		</div>
		<!-- /Background Image -->


	</div>
	<!-- /Testimonial -->

	<!-- Team -->
	<div id="team" class="section md-padding">

		<!-- Container -->
		<div class="container">

			<!-- Row -->
			<div class="row">

				<!-- Section header -->
				<div class="section-header text-center">
					<h2 class="title">Sviluppatore</h2>
				</div>
				<!-- /Section header -->

				<!-- team -->
				<div class="col-sm-4">
					<div class="team">
						<div class="team-img">
							<img class="img-responsive" src="./img/alfonso.jpg" alt="">
							<div class="overlay">
								<div class="team-social">
									<a href="https://www.facebook.com/AlfonsoDelGaizoPhotography"><i class="fa fa-facebook"></i></a>
									<a href="https://www.linkedin.com/in/alfonso-del-gaizo-7a82bb155/"><i class="fa fa-linkedin-square"></i></a>
								</div>
							</div>
						</div>
						<div class="team-content">
							<h3>Alfonso Del Gaizo</h3>
							<span>STUDENTE LAUREA MAGISTRALE IN INFORMATICA</span>
							<p>MATRICOLA: 0522500707</p>

						</div>
					</div>
				</div>
				<!-- /team -->


			</div>
			<!-- /Row -->

		</div>
		<!-- /Container -->

	</div>
	<!-- /Team -->


	<!-- Contact -->
	<div id="contact" class="section md-padding bg-success">

		<!-- Container -->
		<div class="container">
			<!-- Row -->
			<div class="row">

				<!-- Section-header -->
				<div class="section-header text-center">
					<h2 class="title">Contatti</h2>
				</div>
				<!-- /Section-header -->

				<!-- contact -->
				<div class="col-sm-4">
					<div class="contact">
						<i class="fa fa-phone"></i>
						<h3>Telefono</h3>
						<p>3396881152</p>
					</div>
				</div>
				<!-- /contact -->

				<!-- contact -->
				<div class="col-sm-4">
					<div class="contact">
						<i class="fa fa-envelope"></i>
						<h3>Email</h3>
						<p>a.delgaizo2@gmail.com</p>
					</div>
				</div>
				<!-- /contact -->

				<!-- contact -->
				<div class="col-sm-4">
					<div class="contact">
						<i class="fa fa-map-marker"></i>
						<h3>Indirizzo</h3>
						<p>Via Giovanni Paolo II, 132, 84084 Fisciano SA</p>
					</div>
				</div>
				<!-- /contact -->

			
			</div>
			<!-- /Row -->

		</div>
		<!-- /Container -->

	</div>
	<!-- /Contact -->


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
