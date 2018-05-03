import React,{ Component } from 'react'
class Login extends Component{
    constructor(props){
        super(props)
        this.state={
            email: '',
            apikey: ''
        }
    }
	render(){
		return(
				<div>
                    
						Email= <input type = 'text' palceholder="Email" value = {this.state.email} onChange={(e) => this.onEmailchange(e)} /><br/>
						API Key = <input type = 'password' value = {this.state.apikey} onChange={(e) => this.onApikeychange(e)} /><br/>
						
            <button onClick={() => this.onSubmit()}>Submit</button>
                </div>
			)
     }

    onEmailchange(e){
        this.setState({email:e.target.value})
    }
    onApikeychange(e){
        this.setState({apikey:e.target.value})
    }

    onSubmit(){
        fetch('https://api.rebrandly.com/v1/account',
    {
        headers: {
            apikey: this.state.apikey
        }
    })
        .then(response => {
            if(response.ok){
                response.json()
                .then(data => {
                    console.log(data)
                    if(data.email === this.state.email){
                        console.log("Right User")
                    }
                    else {
                        alert("Not Authorized User")
                    }
                })
                console.log(response, 'Not error')
            }
            else{
                alert(response.statusText)
            }
            console.log(response)
        })
        .catch(error => {
            alert(error)
        })
    }
    

}
export default Login