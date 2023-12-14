import { Button } from './components/atoms/Button';
import { Typography } from './components/atoms/Typography';

function App() {
  return (
    <>
      <p className='mt-xl'>Get ready for the </p>
      <Typography as='h1' className='text-6xl'>
        World's Bestest Webpage
      </Typography>
      <Button variant='primary' size='large'>
        Click me
      </Button>
    </>
  );
}

export default App;
