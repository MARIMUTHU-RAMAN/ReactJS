
import ComponentsList from './ComponentsList';
import Login from './Login/Login';
import { createSignal, onMount } from 'solid-js';

const App = (props) => {
  const [isLogin,setLogin] = createSignal(false)


  onMount(()=>{
    localStorage.setItem("authorized","false")
  })

  return (
    <div class="container">

      {/* {isLogin() ?  props.children : <Login setLogin={setLogin} />} */}
      <ComponentsList />
    </div>
  )
}

export default App
