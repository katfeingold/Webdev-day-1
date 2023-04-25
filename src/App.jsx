import Navbar from './app_components/navbar';
import useRouter from './app_hooks/useRouter';

// can also use <Navbar></Navbar> or <Navbar /> to open/close as well
function App() {
//route is capitalized here because it referes to a component
  const [Route, params] = useRouter(); // this is the destructure that we are passing the params as a prop through the route

  return( 
  <div>
    <Navbar />
    <Route params={params} />

  </div>
  );
}

export default App;
