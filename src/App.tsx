import { Button } from './components/atoms/Button';
import { Typography } from './components/atoms/Typography';

function App() {
  return (
    <>
      <h1 className='text-3xl text-primary-500 font-bold underline text-click'>Hello world!</h1>
      <p className='mt-xl'>Some more text</p>
      <button className='px-xl py-m text-primary-100 rounded-s bg-warning-500 hover:bg-warning-900'>
        Click me
      </button>
      <Typography as='h1' className='text-6xl'>
        Hello world!
      </Typography>
      <Button variant='primary' size='large'>
        Click me
      </Button>
    </>
  );
}

export default App;
