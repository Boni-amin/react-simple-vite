

const IffConRanComponent = () => {
    const loginbtn= false;
    // React er vitor conditional rendaring korar somoy Jsx er onso toko ke variable er vitor rakha jai.
    // const login = <button>Login-2</button>
    // const logout = <button>Loguot-2</button>
    return (
        <div>
            {
                (()=>{
                    if (loginbtn===true) {
                        // return login; 
                        return(
                            <div>
                                <h1>You are Login Succes</h1>
                                <button>Are You Logout</button>
                            </div>
                        )
                    }
                    else{
                        // return logout;
                        return (
                            <div>
                                <h1>You are Logout Succes</h1>
                                <button>Are You Login</button>
                            </div>
                        )
                    }
                })()
            }
        </div>
    );
};

export default IffConRanComponent;