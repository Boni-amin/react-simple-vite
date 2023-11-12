

const AttributeComponent = () => {
    const clickMe =(msg)=>{
        alert(msg)
    }
    return (
        <div>
            <h2>This is Clickable Button</h2>
            <button onClick={()=>{clickMe("Click Me Ok")}}>Click</button>
        </div>
    );
};

export default AttributeComponent;