import React from 'react';
import Login from './Login.jsx';
import SignUp from './Signup.jsx';
import Home from './Home.jsx'
import axios from 'axios';
import ForgetAccount from './ForgotAccount.jsx';



var FormData = require('form-data');
const INPUT_TIMEOUT = 250;
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            person: {},
            items: [],// selection of 
            view: 'home', //principal views 
            viewoption: 1,// new goal view
            value: '',
            predictions: [],// selection airports name
            airportdata: {},//all the data of api
            viewAirport: 0,// view airports 
            airportselected: [],// selection airport
            iata: ''
        }
        this.onChange = this.onChange.bind(this);
        this.change = this.change.bind(this)
        this.changefile = this.changefile.bind(this)
        this.post = this.post.bind(this)
        this.enterAccount = this.enterAccount.bind(this)
        this.changeView = this.changeView.bind(this)
        this.changeViewOptions = this.changeViewOptions.bind(this)
        this.onChangeselection = this.onChangeselection.bind(this)
        this.addgoal = this.addgoal.bind(this)
        // this.selectionItem=this.selectionItem.bind(this)
    }
    componentDidMount() {
        axios.get('https://raw.githubusercontent.com/mwgg/Airports/master/airports.json')
            .then(result => {
                this.setState({ airportdata: result.data })
                console.log(this.state.airportdata)
            })
    }
    onChangeselection(e) {
        this.setState({ value: e.target.value })
    }



    getPredictions(value) {
        // let's say that it's an API call
        var array = []
        var airportname = []
        if (value.length > 2) {
            for (var key in this.state.airportdata) {
                if (this.state.airportdata[key].tz.toLowerCase().includes(value.toLowerCase())
                    && this.state.airportdata[key].iata !== '') {
                    airportname.push(this.state.airportdata[key].name)
                    array.push(this.state.airportdata[key])
                    console.log(airportname)
                }
            }
            this.setState({
                airportselected: array
            })
            return airportname.slice(0, 10)
        }
    }


    onChange(e) {
        // clear timeout when input changes value
        clearTimeout(this.timeout);
        const value = e.target.value;
        this.setState({
            value
        });

        if (value.length > 2) {
            // make delayed api call
            this.timeout = setTimeout(() => {
                const predictions = this.getPredictions(value);
                this.setState({
                    predictions,
                    viewAirport: 1
                });
            }, INPUT_TIMEOUT);
        } else {
            this.setState({
                predictions: [],
                viewAirport: 0
            });
        }
    }
    changeView(option) {
        this.setState({
            view: option
        })
    }
    change(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(e.target.value);
    }
    changefile(e) {

        let image = e.target.files[0]
        console.log(image);

        const formData = new FormData()
        formData.append("file", image);
        formData.append("upload_preset", "nt1uphup");

        axios.post("http://api.cloudinary.com/v1_1/magico/image/upload", formData)
            .then(result => {
                this.setState({
                    image: result.data.public_id
                })
                console.log(result.data)
            })
    }
    enterAccount() {
        if (this.state.username) {
            axios.get(`/api/items/login`)
                .then(result => {
                    if (result.data[0].username === this.state.username && result.data[0].password === this.state.password) {
                        console.log(result);
                        this.setState({
                            person: result.data[0],
                            view: 'home'
                        })
                    }

                })
        }
        this.totals
    }
    post() {
        if (this.state.name && this.state.email && this.state.password) {
            var person = {
                name: this.state.name,
                email: this.state.email,
                password: this.state.password,
                dob: this.state.dob,
                country: this.state.country,
                image: this.state.image
            }
            console.log(person);
            axios.post('/api/user/signUp', person)
            this.get()
        }
    }

    // selectionItem(e){
    //     console.log(e.target.value);
    //     this.setState({
    //         items :this.state.person[e.target.value]
    //     })

    // }

    addgoal() {
        console.log('ok');
        // if (this.state.departure && this.state.budget && this.state.from && this.state.to) {
            var array = []
        console.log(this.state.airportselected)
        for (var i = 0; i < this.state.airportselected.length; i++) {
            if (this.state.airportselected[i].name === this.state.value) {
                var iata=this.state.airportselected[i].iata
                this.setState({
                    iata: iata
                })
            }
        }
        console.log(iata);
            var newsearch = {
                iata:iata,
                departure: this.state.value,
                from: this.state.from,
                to: this.state.to,
                budget: this.state.budget
            }
            array.push(newsearch)
            axios.put(`/api/user/${this.state.email}`, { search: array })
        //     this.get()
        //     this.setState({ viewoption: 0 })
        // }
    }

    changeViewOptions(option) {
        console.log('hi');
        this.setState({
            viewoption: option
        })
    }

    render() {
        return (
            <div className='app'>


                {this.state.view === 'login' && <Login change={this.change} get={this.enterAccount} changeView={this.changeView} />}
                {this.state.view === 'forgetaccount' && <ForgetAccount changeView={this.changeView} change={this.change} />}
                {this.state.view === 'signup' && <SignUp change={this.change} changefile={this.changefile} post={this.post} changeView={this.changeView} />}

                {this.state.view === 'home' && <Home onChangeselection={this.onChangeselection} viewAirport={this.state.viewAirport}
                    predictions={this.state.predictions} value={this.state.value} onChange={this.onChange} viewoption={this.state.viewoption}
                    changeViewOptions={this.changeViewOptions} changevalue={this.change} change={this.change} addgoal={this.addgoal.bind(this)}
                    person={this.state.person} items={this.state.items} />}

            </div>


        )
    }
}
export default App