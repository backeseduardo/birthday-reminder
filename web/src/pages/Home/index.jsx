import Button from '../../components/Button'
import Input from '../../components/Input'
import Separator from '../../components/Separator'

function Home() {
  return (
    <div className='p-4 flex flex-col'>
      <div>
        <h1>Buttons</h1>

        <Separator />

        <Button>Click me</Button>

        <Button variant='secondary' className='ml-2'>
          Click me
        </Button>
      </div>

      <div className='mt-2'>
        <h1>Inputs</h1>

        <Separator />

        <Input label='Email' defaultValue='519backes@gmail.com' />

        <Input label='Email' />

        <Input label='Email' value='519.com' error />
      </div>
    </div>
  )
}

export default Home
