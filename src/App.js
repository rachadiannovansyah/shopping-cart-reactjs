// eslint-disable-entire-file
import './App.css';
import ReviewProduk from './Reviews';
import FotoProduk from '../src/components/FotoProduk';
import InfoProduk from '../src/components/InfoProduk';

function App() {  
  return (
    <div className="Parentbox">
      <FotoProduk />
      <InfoProduk isDiscount="yes" category="Apple" name="Apple MacBook Pro 2020"/>
      <ReviewProduk />
    </div>
  );
}

export default App;
