import './App.css';
import Testimonial from './components/Testimonial';
import Card from './components/Card';
import reviews from './data';
function App() {
  return (
    <div>
      <div className='flex flex-col w-[100vw] justify-center items-center h-[100vh] bg-gray-200'>
        <h1 className='text-4xl font-bold'>Our Testimonials</h1>
        <div className='bg-violet-400 h-[4px] w-1/12 mt-1 mx-auto'></div>
        <Testimonial reviews ={reviews}/>
      </div>
    </div>
  );
}

export default App;
