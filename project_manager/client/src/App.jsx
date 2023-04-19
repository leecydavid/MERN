// default imports
import './App.css';
import {Routes, Route, Navigate} from 'react-router-dom';
// component imports
import ProductForm from './components/ProductForm';
import ProductViewOne from './components/ProductViewOne';
import ProductEdit from './components/ProductEdit';

const App = () => {
  return (
    <div className="App">
      <h1>Welcome to Product Manager!</h1>
      <Routes>
        <Route path='/' element={<Navigate to='/product' />} ></Route>
        {/* return redirect: home page will be set to /product (Form & View All components) */}
        <Route path='/product' element={<ProductForm />} ></Route>
        {/* home page: Product Form component (create new product) */}
        <Route path='/product/:id' element={<ProductViewOne />} ></Route>
        {/* view one page: Product View One component */}
        <Route path='/product/:id/edit' element={<ProductEdit />} ></Route>
        {/* edit page: Product Edit component */}
      </Routes>
    </div>
  );
}

export default App;
