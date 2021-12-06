import React,{Component} from "react";
import Repose from "./Repose";
class Specific extends Component {
    constructor(props) {
        super(props);
        this.state = { user:[] };

        const FetchUser = async(user)=>{
            const api_call = await fetch(`https://api.github.com/users/${user}`);
            const data = await api_call.json();
            return {data};
        }

        FetchUser(props.match.params.login).then((res)=>{
            if (!res.data.message) {
                this.setState({user:res.data})
            }
        })
    }

    Data(){
        if (this.state.user.login === 0) {
            return(<i>there is no user found with user name:
                {this.props.match.params.login}
            </i>)
                } else {
                    return (
           
                    <center>
                     <section className="Specific">
                      <div className="main" id="main">
                       <div className="container">
                        <div className="row">
                         <div className="col-lg-12 col-md-12">
                           <div className="SUsersData">
           
                             { 
                               this.state.is_Favorite === false ?
                               <i onClick={this.AddToFave}  
                               className='fas fa-heart  NotFave'>          
                               </i> :
                               <i onClick={this.RemoveFromFave}  
                               className='fas fa-heart  Fave '>          
                               </i>  
                              }
                                <h4>Name : <i className="bl">
                                    { this.state.user.name }
                                </i>
                                </h4>
                               <img src={this.state.user.avatar_url} alt="" />
                               <h4>followers : <i className="bl"> 
                               {this.state.user.followers} 
                               </i></h4> 
                               <h4>location : <i className="bl">
                                    { this.state.user.location }
                               </i></h4>
                               < Repose user={this.props.match.params.login}   />

           
           
                          </div>
                         </div>
                        </div>
                       </div>
                      </div>
                     </section>
                    </center>
           
                    )
                   }
    }
    render() {
        return (
            <React.Fragment>    
                {this.Data()}
       </React.Fragment> 
        );
    }
}

export default Specific;