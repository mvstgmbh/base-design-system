import { Button } from './components/atoms/Button';
import { Typography } from './components/atoms/Typography';

function App() {
  return (
    <div className='p-lg'>
      <Typography as='h1' variant='h3'>
        Hello world!
      </Typography>
      <Button variant='primary' size='large'>
        Click me
      </Button>
    </div>
  );
}

export default App;
