import "./index.css"

const Filters = ({ rum, vodka, gin, setRum, setVodka, setGin }) => {
    const handleRumChange = (e) => {
      setRum(e.target.checked);
    };
  
    const handleVodkaChange = (e) => {
      setVodka(e.target.checked);
    };
  
    const handleGinChange = (e) => {
      setGin(e.target.checked);
    };
  
    return (
      <div className="Filters">
        <h3>Filters:</h3>
        <label>
          <input type="checkbox" checked={rum} onChange={handleRumChange} />
          Rum
        </label>
        <label>
          <input type="checkbox" checked={vodka} onChange={handleVodkaChange} />
          Vodka
        </label>
        <label>
          <input type="checkbox" checked={gin} onChange={handleGinChange} />
          Gin
        </label>
      </div>
    );
  };
  
  export default Filters;