

const TernaryComponent = () => {
    const login= true;
    // React er vitor conditional rendaring korar somoy Jsx er onso toko ke variable er vitor rakha jai.
    const loin = <button>Login</button>
    const logout = <button>Loguot</button>
    return (
        <div>
            {
                // login===true?(<button>Loguot</button>):(<button>Login</button>)
                login===true?(logout):(loin)
            }
        </div>
    );
};

export default TernaryComponent;