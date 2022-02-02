import React from 'react';
import Login from './Login.jsx';
import SignUp from './Signup.jsx';
import Home from './Home.jsx'
import axios from 'axios';

var FormData = require('form-data');

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            person: {},
            items: [],
            view: 'home',
            viewoption:0
        }
        this.change = this.change.bind(this)
        this.changefile = this.changefile.bind(this)
        this.post = this.post.bind(this)
        this.get = this.get.bind(this)
        this.changeView = this.changeView.bind(this)
        // this.selectionItem=this.selectionItem.bind(this)
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
    get() {
        if (this.state.username) {
            axios.get(`/api/items/${this.state.username}`)
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
        if (this.state.username && this.state.name && this.state.email && this.state.password) {
            var person = {
                username: this.state.username,
                name: this.state.name,
                email: this.state.email,
                password: this.state.password,
                birthday: this.state.birthday,
                image: this.state.image
            }
            console.log(person);
            axios.post('/api/items/', person)
            this.get()
        }
    }
    
    // selectionItem(e){
    //     console.log(e.target.value);
    //     this.setState({
    //         items :this.state.person[e.target.value]
    //     })
        
    // }

    addgoal(){
        var array=this.state.person.goals
        var newgoal={
            goal_lb:this.state.goal_lb,
            description:this.state.description,
            category:this.state.category,
            date:this.state.date
        }
        array.push(newgoal)
        axios.put(`/api/items/${this.state.username}`,{goals:array})
        this.get()
        this.setState({viewoption: 0})
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


                <Login  change={this.change} get={this.get} changeView={this.changeView} />

                 <SignUp  change={this.change} changefile={this.changefile} post={this.post} changeView={this.changeView} />

                 <Home viewoption={this.state.viewoption} changeViewOptions={this.changeViewOptions.bind(this)}  changevalue={this.change} change={this.change}  addgoal={this.addgoal.bind(this)} person={this.state.person}  items={this.state.items} />

            </div>


        )
    }
}
export default App