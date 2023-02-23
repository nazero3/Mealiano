import { Fragment, useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
function App() {
  const [clicked, setClicked] = useState(false);
  function showCart(){
    setClicked(true);
  }
  function hideCart(){
    setClicked(false);
  }
  return (
    <Fragment>
      {clicked && <Cart onHideCart={hideCart}/> }
      <Header onShowCart={showCart}/>
      <main>
        <Meals />
      </main>
      
    </Fragment>
  );
}

export default App;
