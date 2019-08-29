Vue.component('pagehead',{
    template: 
    `
    <div class="d-flex justify-content-between">
        <div class="ml-3">
            <table>
                <tbody>
                    <tr>
                        <td class="align-top">                    
                            <img src="storage/logo.png" class="rounded-circle float-left mt-3 ml-3" width="80" height="70" alt="">
                        </td>
                    </tr>
                    <tr>
                    <td class="align-bottom">
                        <strong><a class="text-dark align-bottom ml-2">Thirsty Oasis</a></strong>
                    </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="ml-auto mr-4">
            <table>
                <tbody>
                    <tr>
                        <td class="align-top">                    
                            <img src="storage/user.png" class="rounded-circle float-left mt-3 ml-5" width="80" height="70" alt="">
                        </td>
                    </tr>
                    <tr>
                        <td class="align-bottom">
                            <strong><a class="text-dark align-bottom ml-5">Username</a></strong>
                    </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    `
});

Vue.component('navigation',{
    template:
    `
    <nav class="navbar navbar-expand-lg navbar-light bg-dark mt-3">
        
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <i class="fa fa-bars text-white"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav mx-auto">
                &nbsp;
                <li class="nav-item">
                    <a class="nav-link text-white active" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                &nbsp;
                <li class="nav-item">
                    <a class="nav-link text-white" href="#">Update Profile</a>
                </li>
                &nbsp;
                <li class="nav-item">
                    <a class="nav-link text-white" href="#">Broadcast Yourself</a>
                </li>
                &nbsp;
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Balance: 0 BTC
                        <i class="fa fa-angle-down" aria-hidden="true"></i>
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a class="dropdown-item" href="#">Add Balance</a>
                        <a class="dropdown-item" href="#">Withdraw Funds</a>
                    </div>
                </li>
            </ul>
                   
        </div>  
    </nav>
    ` 
})

Vue.component("sorting",{
    template: 
    `
    <div class="d-flex justify-content-center">
        <div class="form-row align-items-center">
            <div class="row">
                <div class="col">
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Theme
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                            <button class="dropdown-item" type="button">Item A</button>
                            <button class="dropdown-item" type="button">Item B</button>
                            <button class="dropdown-item" type="button">Item C</button>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Ethnicity
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                            <button class="dropdown-item" type="button">Ethnicity A</button>
                            <button class="dropdown-item" type="button">Ethnicity B</button>
                            <button class="dropdown-item" type="button">Ethnicity C</button>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Sort by
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                            <button class="dropdown-item" type="button">Filter A</button>
                            <button class="dropdown-item" type="button">Filter B</button>
                            <button class="dropdown-item" type="button">Filter C</button>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    </div> 
    `
})
//this must be changed, at this moment is just for demo version
Vue.component('list',{
    template:
    `
    <div class="container">
        <div class="row">
            <div class="col-sm-4 mt-4">
                <div class="card text-center">
                    <h5 class="card-title mt-3">Theme A</h5>
                    <img class="card-img-top responsive-img" src="http://paranoidandroid.co/assets/wallpapers/2018/submerged_desktop_thumb.jpg" alt="Card image cap">
                    <div class="card-body">
                        <a href="#" class="btn btn-primary bg-dark">
                            Buy: 10BTC
                        </a>
                    </div>
                </div>
            </div>
            <div class="col-sm-4 mt-4">
                <div class="card text-center">
                    <h5 class="card-title mt-3">Theme B</h5>
                    <img class="card-img-top responsive-img" src="http://paranoidandroid.co/assets/wallpapers/2018/submerged_desktop_thumb.jpg" alt="Card image cap">
                    <div class="card-body">
                        <a href="#" class="btn btn-primary bg-dark">
                            Buy: 10BTC
                        </a>
                    </div>
                </div>
            </div>
            <div class="col-sm-4 mt-4">
                <div class="card text-center">
                    <h5 class="card-title mt-3">Theme C</h5>
                    <img class="card-img-top responsive-img" src="http://paranoidandroid.co/assets/wallpapers/2018/submerged_desktop_thumb.jpg" alt="Card image cap">
                    <div class="card-body">
                        <a href="#" class="btn btn-primary bg-dark">
                            Buy: 10BTC
                        </a>
                    </div>
                </div>
            </div>
            <div class="col-sm-4 mt-4">
                <div class="card text-center">
                    <h5 class="card-title mt-3">Theme A</h5>
                    <img class="card-img-top responsive-img" src="http://paranoidandroid.co/assets/wallpapers/2018/submerged_desktop_thumb.jpg" alt="Card image cap">
                    <div class="card-body">
                        <a href="#" class="btn btn-primary bg-dark">
                            Buy: 10BTC
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    `
})



const app = new Vue({
    el: '#app',
    data: {
        
    },
    methods:{
       
    },
    computed:{
       
    }
})