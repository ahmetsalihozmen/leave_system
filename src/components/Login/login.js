import React from 'react';
import './login.css'

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            login: '',
            password: ''
        }
    }
    onUsernameChange = (event) => {
      this.setState({login: event.target.value})
    }

    onPasswordChange = (event) => {
      this.setState({password: event.target.value})
    }

    onSubmitLogin = () => {
      fetch('https://rocky-retreat-96881.herokuapp.com/login',{
        method: 'POST',
        headers:{'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username:this.state.login,
          password:this.state.password
        })
      })
      .then(response=> response.json() )
      .then(valid =>{
        if(valid){
          this.props.onRouteChange('main');
        }
        else{
          console.log(valid)
          console.log('Wrong Id or Password')
        }
      })
    }

    render(){
        return(
            <article className="br3 ba b--black-10 mv4 w-100 w-50-m w--l mw6 shadow-5 center">
            <main className="pa4 black-80">
              <div className="measure">
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                  <legend className="f1 fw6 ph0 mh0">Leave Manager</legend>
                  <div className="mt3">
                    <label className="db fw6 lh-copy f6" htmlFor="USername">Username</label>
                    <input
                      className="pa2 input-reset ba bg-transparent w-100"
                      type="username"
                      placeholder="Login Username"
                      name="Username"
                      id="Username"
                      onChange={this.onUsernameChange}
                    />
                  </div>
                  <div className="mv3">
                    <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                    <input
                      className=" pa2 input-reset ba bg-transparent w-100"
                      placeholder="Login Password"
                      type="password"
                      name="password"
                      id="password"
                      onChange={this.onPasswordChange}
                    />
                  </div>
               </fieldset>
                <div className="">
                  <input
                    className="ma3 b ph3 pv2 input-reset ba white"
                    type="submit"
                    value="Login"
                    onClick={this.onSubmitLogin}
                  />
                </div>

              </div>
            </main>
          </article>
        );
    }  
}



export default Login;


