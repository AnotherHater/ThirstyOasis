@include('Footer')
@include('nav')
@include('ThemeList')
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link type="text/css" rel="stylesheet" href="//unpkg.com/bootstrap/dist/css/bootstrap.min.css" />
    <link type="text/css" rel="stylesheet" href="//unpkg.com/bootstrap-vue@latest/dist/bootstrap-vue.min.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/vue-select/3.1.0/vue-select.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="css/styles.css">
    <title>Thirsty Oasis</title>

</head>
<body class="bg-light">
    <div id="app">
        <!--Check component placed in scripts.js at line 1 for the code-->
        <pagehead></pagehead>
        <!--Check nav.blade for the code-->
        @yield('nav')
        <br>
        <!--Check ThemeList.blade for the code-->
        @yield('listing')
        <br>
        <!--Check Footer.blade for the code-->
        @yield('footer')
    </div>

    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script src="//unpkg.com/bootstrap-vue@latest/dist/bootstrap-vue.min.js"></script>
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/vue-select/3.1.0/vue-select.js"></script>
    <script src="js/scripts.js"></script>
</body>
</html>