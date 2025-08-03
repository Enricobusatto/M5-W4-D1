import Alert from 'react-bootstrap/Alert';
import './css.components/Welcome.css';
import { useNavigate } from 'react-router';
import { useEffect, useState } from 'react';

function Welcome() {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(6); 

  // Countdown visuale
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Navigazione automatica dopo 6 secondi
  useEffect(() => {
    const redirect = setTimeout(() => navigate('/home'), 6000);
    return () => clearTimeout(redirect);
  }, [navigate]);

  return (
    <Alert variant="success" className='shadow d-flex flex-column ' id='welcome-alert'>
      <h3>Hey, Nice To See You, <br/><br/>Welcome to the Books React application!</h3>
      <p>This is a simple app to manage your book collection.</p>
      <hr />
      <p className="mb-2">Enjoy your reading journey!</p>
      <p className='text-muted h6'>Redirecting in <strong>{countdown}</strong> seconds...</p>
    </Alert>
  );
}

export default Welcome;
