
import { useNavigate, useParams} from '@solidjs/router'
import Login from '@components/';

const App = (props) => {
  const navigator = useNavigate();
  const parameters = useParams();

  console.log(window.location.href);

  return (
    <div class="container">
      {  <Login />}
      {props.children}
    </div>
  )
}

export default App
