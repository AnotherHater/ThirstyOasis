@include('Footer')

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="css/styles.css">
    <title>Title?</title>
</head>
<body>
    <div id="app">
        <pagehead></pagehead>
        <navigation></navigation>
        <br>
        <broadcast></broadcast>
        <br>
        <div class="container">
                <div class="d-flex flex-row">
                        <div class="embed-responsive embed-responsive-16by9">
                            <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/m_qlgFQs7E4"> </iframe>
                        </div>
                        <div class="">
                           <div class="chatbox">
                               <div class="messages bg-light">

                               </div>
                               <div class="send bg-light">
                                    <form class="form-inline ml-4 pt-2">
                                        <div class="form-group mb-2">
                                            <input type="text" class="form-control"  placeholder="Send a message">
                                            <button type="submit" class="btn btn-primary btn-sm ml-1">Send</button>
                                        </div>
                                        
                                    </form>
                               </div>
                           </div>
                        </div>
                      </div>

        </div>
        <br>
        @yield('footer')
    </div>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    <script src="js/scripts.js"></script>
</body>
</html>