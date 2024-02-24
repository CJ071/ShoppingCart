import Spinner from 'react-bootstrap/Spinner';

function SpinLoader() {
  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',margin:'0 auto'}}>
      <Spinner  animation="border" />
      </div>
  );
}

export default SpinLoader;