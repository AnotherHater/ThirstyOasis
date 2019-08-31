@section('listing')
    <!--Filter dropdown here-->
    <b-container class="margin-b">
        <b-row>
            <b-col cols="12" md="4" class="margin-b">
                <v-select :options="theme" label="title" v-model="Tselected">
                    <template slot="option" slot-scope="option">
                        <span class="fa" :class="option.icon"></span>
                            @{{ option.title }}
                    </template>
                </v-select>
            </b-col>
            <b-col cols="12" md="4" class="margin-b">
                <v-select :options="ethnicity" label="title" v-model="Eselected">
                    <template slot="option" slot-scope="option">
                        <span class="fa" :class="option.icon"></span>
                            @{{ option.title }}
                    </template>
                </v-select>
            </b-col>
            <b-col cols="12" md="4" class="margin-b">
                <v-select :options="sorting" label="title" v-model="Sselected">
                    <option value="" disabled hidden>Sort by</option>
                    <template slot="option" slot-scope="option">
                        <span class="fa" :class="option.icon"></span>
                        @{{ option.title }}
                    </template>
                </v-select>
            </b-col>
        </b-row>
    </b-container>
    <!--List of themes here-->
    <b-container>         
        <b-card-group deck>
            <b-row>
                <b-col cols="12" md="4" class="margin-b">
                    <b-card  header="Theme A" header-tag="header" header-class="black-title" body-class="no-padding">  
                        <b-img src="http://paranoidandroid.co/assets/wallpapers/2018/submerged_desktop_thumb.jpg" fluid-grow alt="Fluid image"></b-img>
                        <div slot="footer"  style="text-align:center;"><small class="text-muted"><b-button variant="dark"> Buy: 10BTC</b-button></small></div>
                    </b-card>
                </b-col>
                <b-col cols="12" md="4" class="margin-b">
                    <b-card  header="Theme B" header-tag="header" header-class="black-title" body-class="no-padding">  
                        <b-img src="http://paranoidandroid.co/assets/wallpapers/2018/submerged_desktop_thumb.jpg" fluid-grow alt="Fluid image"></b-img>
                        <div slot="footer" style="text-align:center;"><small class="text-muted"><b-button variant="dark"> Buy: 10BTC</b-button></small></div>
                    </b-card>
                </b-col>
                <b-col cols="12" md="4" class="margin-b">
                    <b-card  header="Theme C" header-tag="header" header-class="black-title" body-class="no-padding">  
                        <b-img src="http://paranoidandroid.co/assets/wallpapers/2018/submerged_desktop_thumb.jpg" fluid-grow alt="Fluid image"></b-img>
                        <div slot="footer" style="text-align:center;"><small class="text-muted"><b-button variant="dark"> Buy: 10BTC</b-button></small></div>
                    </b-card>
                </b-col>
                <b-col cols="12" md="4" class="margin-b">
                    <b-card  header="Theme D" header-tag="header" header-class="black-title" body-class="no-padding">  
                        <b-img src="http://paranoidandroid.co/assets/wallpapers/2018/submerged_desktop_thumb.jpg" fluid-grow alt="Fluid image"></b-img>
                        <div slot="footer" style="text-align:center;"><small class="text-muted"><b-button variant="dark"> Buy: 10BTC</b-button></small></div>
                    </b-card>
                </b-col>
            </b-row>
        </b-card-group>
    </b-container>
@endsection