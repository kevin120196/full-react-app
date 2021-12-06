import React, { Component } from "react";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Data: '',
            checked:false
          };
    }

    



    handleChange = (e) =>{
        this.setState(()=>({
            checked: !this.state.checked
        }))

        console.log(this.state.checked,'checked');
    }

    search = (e)=>{
        if (this.state.Data === '') return alert('miss type seach you can not be empty');
        this.setState({[e.target.name]: e.target.value})

        if (this.state.checked) {
            this.props.history.push({
                pathname:`/Specific/${this.state.Data}`,
               });
        }else{
            this.props.history.push({
                pathname:`/Data/${this.state.Data}`,
               });
        }

    };


    render() {
        return (
           <React.Fragment>
                <section className="mainPage">
                    <center>
                        <div className="main" id="main">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12 col-md-12">
                                        <div class="main__text-container">
                                        <img src="https://github.githubassets.com/images/modules/logos_page/Octocat.png" className="GitLogo"  alt=''/>
                                            <h1 className="main__title">
                                                GitFetch - Profile Finder for GitHub
                                            </h1>
                                            <p className="main__subtitle">
                                                Check out the repos, followers and more, just by entering a username!
                                            </p>
                                        </div>
                                        <div className="container">
                                            <div className="check">
                                                <input className="" type="checkbox" name="checked" value={this.state.checked}
                                                onChange={this.handleChange} />
                                                Go Direct to The user Profile
                                            </div>
                                            <input type="text" id="search" 
                                                name="Data" className="btn btn-outline-primary"
                                                placeholder={
                                                this.state.checked ? 
                                                'Go Directely to user Profile' : 
                                                'Enter a username...' } 
                                                value={this.state.Data}
                                                onChange={(e) => {
                                                    this.setState({ [e.target.name]: e.target.value });
                                                }}
                                                />
                                                <span>
                                                    <button className="btn btn-outline-primary"
                                                    onClick={this.search}>Search</button>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </center>
                </section>
           </React.Fragment> 
        );
    }
}

export default Main;