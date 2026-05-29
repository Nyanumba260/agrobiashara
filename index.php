<?php

session_start();

if(isset($_POST['login'])){

    $email = $_POST['email'];
    $password = $_POST['password'];
    $role = $_POST['role'];

    // SIMPLE LOGIN VALIDATION

    if(!empty($email) && !empty($password)){

        $_SESSION['user'] = $email;
        $_SESSION['role'] = $role;

        $message = "Welcome " . $role . "! Login successful.";

    }else{

        $message = "Please fill all fields.";

    }

}

?>

<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>FarmFresh Market</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">

    <link rel="stylesheet" href="style.css">

</head>

<body>

<!-- NAVBAR -->

<nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">

    <div class="container">

        <a class="navbar-brand fw-bold" href="#">FarmFresh</a>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">

            <span class="navbar-toggler-icon"></span>

        </button>

        <div class="collapse navbar-collapse" id="navmenu">

            <ul class="navbar-nav ms-auto">

                <li class="nav-item">

                    <a class="nav-link active" href="index.php">Home</a>

                </li>

                <li class="nav-item">

                    <a class="nav-link" href="product.html">Products</a>

                </li>

                <li class="nav-item">

                    <a class="nav-link" href="service.html">Services</a>

                </li>

                <li class="nav-item">

                    <a class="nav-link" href="contact.html">Contact</a>

                </li>

            </ul>

        </div>

    </div>

</nav>


<!-- HERO SECTION -->

<section class="hero">

    <div class="container text-center">

        <img src="images/profile.jpg" class="profile-img">

        <h1 id="heroTitle" class="display-3 fw-bold text-white mt-4">

            Fresh Farm Produce Delivered Nationwide

        </h1>

        <p class="lead text-light">

            Buy directly from trusted farmers and enjoy fresh vegetables, fruits and flowers.

        </p>

        <a href="product.html" class="btn btn-warning btn-lg mt-3">

            Shop Now

        </a>

    </div>

</section>


<!-- SUCCESS MESSAGE -->

<?php if(isset($message)){ ?>

<div class="container mt-5">

    <div class="alert alert-info text-center">

        <?php echo $message; ?>

    </div>

</div>

<?php } ?>


<!-- FEATURE SECTION -->

<section class="container py-5">

    <div class="row">

        <div class="col-md-4">

            <div class="feature-box">

                <h4>Fresh Products</h4>

                <p>Farm produce delivered directly from trusted farmers.</p>

            </div>

        </div>

        <div class="col-md-4">

            <div class="feature-box">

                <h4>Fast Delivery</h4>

                <p>Nationwide delivery across Kenya.</p>

            </div>

        </div>

        <div class="col-md-4">

            <div class="feature-box">

                <h4>Secure Payments</h4>

                <p>Pay securely using M-Pesa or bank cards.</p>

            </div>

        </div>

    </div>

</section>


<!-- FOOTER -->

<footer class="footer">

    <div class="container">

        <div class="row">

            <div class="col-md-4">

                <h4>FarmFresh</h4>

                <p>

                    Connecting farmers directly to buyers nationwide.

                </p>

            </div>

            <div class="col-md-4">

                <h4>Quick Links</h4>

                <ul>

                    <li>Home</li>

                    <li>Products</li>

                    <li>Services</li>

                    <li>Contact</li>

                </ul>

            </div>

            <div class="col-md-4">

                <h4>Contact</h4>

                <p>Email: info@farmfresh.com</p>

                <p>Phone: +254 700 000 000</p>

            </div>

        </div>

    </div>

</footer>


<!-- LOGIN POPUP -->

<div class="login-popup" id="loginPopup">

    <div class="popup-content">

        <button type="button" class="btn-close" onclick="document.getElementById('loginPopup').style.display='none'"></button>

        <h3 class="mb-3">Login/Register</h3>

        <form method="POST">

            <select class="form-select mb-3" name="role">

                <option value="Buyer">Buyer</option>

                <option value="Farmer">Farmer</option>

            </select>

            <input type="email"
                   name="email"
                   class="form-control mb-3"
                   placeholder="Email">

            <input type="password"
                   name="password"
                   class="form-control mb-3"
                   placeholder="Password">

            <button type="submit"
                    name="login"
                    class="btn btn-primary w-100">

                Login

            </button>

        </form>

    </div>

</div>


<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>

<script src="script.js"></script>

</body>

</html>