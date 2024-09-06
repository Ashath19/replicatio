import './App.css';
import loadingGif from './components/loading.gif'; // Import the loading GIF

const Loading = () => {
  return (
    <div className="loading-screen">
      <img src={loadingGif} alt="Loading..." />
    </div>
  );
};

export default Loading;