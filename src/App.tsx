import { Typography } from './components/atoms/Typography';

function App() {
  return (
    <div className='p-lg'>
      {/* <Button variant='primary' size='large'>
        Click
      </Button> */}
      <Typography as='h1' className='text-6xl'>
        Hello world!
      </Typography>
    </div>
  );
}

export default App;
