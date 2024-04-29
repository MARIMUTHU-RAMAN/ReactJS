
import { useNavigate} from '@solidjs/router'

const App = (props) => {
  const navigator = useNavigate();


  return (
    <div class="container">
      <a onclick={()=> navigator("/login")}>Go To Login</a>
      <a onclick={()=> navigator("/sidebar")}>Go To Sidebar</a>
      {props.children}
    </div>
  )
}

export default App
