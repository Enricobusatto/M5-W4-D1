import Alert from 'react-bootstrap/Alert';
import './css.components/Welcome.css';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';


function Welcome() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => navigate('/home'), 6000)
  }, []);

  return (
    <Alert variant="success" className='shadow d-flex' id='welcome-alert' >
      <h3>Hey, nice to see you, Welcome to the Books React application!</h3>
      <p>
        This is a simple app to manage your book collection.
      </p>
      <hr />
      <p className="mb-0">
        Enjoy your reading journey!
      </p>
    </Alert>
  );
}



export default Welcome;


