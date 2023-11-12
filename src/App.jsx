import AttributeComponent from "./assets/component/AttributeComponent";
import IffConRanComponent from "./assets/component/IffConRanComponent";
import List from "./assets/component/List";
import TernaryComponent from "./assets/component/TernaryComponent";


const App = () => {
  // Ei Props er modde string , numbar , boolian methood , arry , object, function  and componant patano jai.
  const title = "Country List" ;
  return (
    <div>
      <h1>Hellow World</h1>
      <TernaryComponent></TernaryComponent> <br /> <hr />
      <IffConRanComponent></IffConRanComponent> <br /> <hr /> 
      <List title={title}></List> <br /> <hr /> 
      <AttributeComponent></AttributeComponent>
    </div>
  );
};

export default App;