import { faCoffee, faSave } from '@fortawesome/free-solid-svg-icons';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Separator from '../../components/Separator';

function Home() {
  return (
    <div
      className="p-4 flex flex-col"
      style={{
        maxWidth: 400,
      }}
    >
      <div className="flex flex-col">
        <h1>Buttons</h1>

        <Separator />

        <div>
          <Button>Click me</Button>
        </div>

        <div className="mt-2">
          <Button variant="secondary">Click me</Button>
        </div>

        <div className="mt-2">
          <Button variant="secondary" rightIcon={faCoffee}>
            Click me
          </Button>
        </div>

        <div className="mt-2">
          <Button leftIcon={faSave}>Click me</Button>
        </div>

        <div className="mt-2">
          <Button rightIcon={faSave}>Click me</Button>
        </div>
      </div>

      <div className="mt-2">
        <h1>Inputs</h1>

        <Separator />

        <Input label="Email" defaultValue="519backes@gmail.com" />

        <Input label="Email" />

        <Input
          label="Email"
          value="519.comcccccccccccccccccccccccccccccccccccccccccccccccccccccccc"
          error="Email inválido"
        />
      </div>
    </div>
  );
}

export default Home;
