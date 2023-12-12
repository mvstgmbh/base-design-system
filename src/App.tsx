import { Typography } from './components/atoms/Typography';

function App() {
  return (
    <>
      <h1 className='text-3xl text-primary-500 font-bold underline text-click'>Hello world!</h1>
      <p className='mt-xl'>Some more text</p>
      <button className='px-xl py-m bg-primary-900 text-primary-100 rounded-s hover:bg-warning-500'>
        Click me
      </button>
      <Typography as='h1' className='text-3xl'>
        Hello world!
      </Typography>
    </>
  );
}

export default App;
