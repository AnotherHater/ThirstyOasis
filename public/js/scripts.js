//This is the header of the page, where you can see the brand logo and user's photo
Vue.component('pagehead',{
    template: 
    `
    <div class="d-flex justify-content-between">
        <div class="ml-3">
            <table>
                <tbody>
                    <tr>
                        <td class="align-top">                    
                            <img id="logo" src="storage/logo.png" style="border:2px solid black;" class="rounded-circle float-left mt-3 ml-3" width="80" height="70" alt="">
                        </td>
                    </tr>
                    <tr>
                    <td class="align-bottom">
                        <strong><p class="text-dark align-bottom ml-2 text-break text-center">Thirsty Oasis</p></strong>
                    </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="ml-auto mt-auto">
            <strong><p class="text-dark align-bottom ml-5 text-center">Balance: 100BTC</p></strong>
        </div>
        <div class="mr-4">
            <table>
                <tbody>
                    <tr>
                        <td class="align-top">                    
                            <img id="profile" src="storage/user.png" class="rounded-circle float-left mt-3 ml-5" width="80" height="70" alt="">
                        </td>
                    </tr>
                    <tr>
                        <td class="align-bottom">
                            <strong><a id="username" class="text-dark align-bottom ml-5">Username</a></strong>
                    </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    `
});
//this is the stream section, you can see the video of the streamer here and the chat too. *MAY NEED RESPONSIVITY FIXES*
Vue.component('stream',{
    template:
    `
        <b-container class="bv-example-row center shadow">
            <b-row>
                <b-col cols="12" md="8" class="no-padding">
                    <b-embed  type="iframe" aspect="4by3" src="https://www.youtube.com/embed/m_qlgFQs7E4" allowfullscreen ></b-embed>
                </b-col>
                <b-col cols="12" md="4" class="no-padding">
                    <b-container class="chatbox bg-light">
                        <b-row class="bg-light messages">
                            <b-col align="center"></b-col>
                        </b-row>
                        <b-row class="bg-light send">
                            <b-col align="center">
                                <div>
                                    <div>
                                        <b-form-group id="fieldset-horizontal" description="Be respectful." label-for="input-horizontal">
                                            <b-form-input id="input-horizontal"></b-form-input>
                                        </b-form-group>
                                    </div>
                                </div>
                            </b-col>
                        </b-row>
                    </b-container>
                </b-col>
            </b-row>        
        </b-container>
    `
})

Vue.component('v-select', VueSelect.VueSelect)


const app = new Vue({
    el: '#app',
    data: {
        Tselected:"All Themes",
        Eselected:"All Ethnicities",
        Sselected:"Sort By",
        sorting: [
          {
              title: 'Popularity',
              icon: 'fa-eye'
            },
            {
              title: 'Filter B',
              icon: 'fa-eye'            
            },
            {
              title: 'Filter C',
              icon: 'fa-eye'
            },
            {
              title: 'Filter D',
              icon: 'fa-eye'
            }
        ],
        ethnicity: [
            {
                title: 'Ethnicty A',
                icon: 'fa-user'
              },
              {
                title: 'Ethnicty B',
                icon: 'fa-user'            
              },
              {
                title: 'Ethnicty C',
                icon: 'fa-user'
              },
              {
                title: 'Ethnicty B',
                icon: 'fa-user'
              }
          ],
          theme: [
            {
                title: 'Dark themes',
                icon: 'fa-book'
              },
              {
                title: 'Light themes',
                icon: 'fa-book'            
              },
              {
                title: 'Heavy themes',
                icon: 'fa-book'
              }
          ],
      },
    methods:{
    
    },
    computed:{
       
    }
})
