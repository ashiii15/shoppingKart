import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Content from './Components/Content';
import NavBar from './Components/NavBar';

function App() {
  // const [products,setproducts] = useState([])

  // const fetchProducts = async()=>{
  //  const {data}  = await axios.get(`https://fakestoreapi.com/products`).catch((err)=>err)
  //  setproducts(data)
  // }
  // useEffect(()=>{
  //   fetchProducts()

  // },[])

  return (
    <BrowserRouter>
    <div className="App">
        <NavBar />
        <Content/> 
    </div>
    </BrowserRouter>
  );
}

export default App;
