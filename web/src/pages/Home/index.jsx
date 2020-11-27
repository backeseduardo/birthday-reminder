import PropTypes from 'prop-types';
import Button from '../../components/Button';
import Input from '../../components/Input';

function Box(props) {
  const { children, className } = props;

  return (
    <div
      className={`bg-indigo-500 rounded flex justify-center items-center h-10 ${className}`}
    >
      {children}
    </div>
  );
}

Box.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

Box.defaultProps = {
  children: undefined,
  className: undefined,
};

function Home() {
  return (
    <div
      className="h-full mx-4"
      style={{
        minWidth: '20rem',
      }}
    >
      <header className="flex justify-between items-center border-b mb-4 whitespace-nowrap">
        <h1 className="text-xl">BDay Reminder</h1>

        <nav>
          <Button variant="link" className="mr-2">
            Sign Up
          </Button>
          <Button variant="link">Sign In</Button>
        </nav>
      </header>

      <main className="grid gap-4 grid-cols-12">
        <div className="bg-indigo-500 rounded flex justify-center items-center h-10">
          1
        </div>
        <div className="bg-indigo-500 rounded flex justify-center items-center h-10">
          2
        </div>
        <div className="bg-indigo-500 rounded flex justify-center items-center h-10">
          3
        </div>
        <div className="bg-indigo-500 rounded flex justify-center items-center h-10">
          4
        </div>
        <div className="bg-indigo-500 rounded flex justify-center items-center h-10">
          5
        </div>
        <div className="bg-indigo-500 rounded flex justify-center items-center h-10">
          6
        </div>
        <div className="bg-indigo-500 rounded flex justify-center items-center h-10">
          7
        </div>
        <div className="bg-indigo-500 rounded flex justify-center items-center h-10">
          8
        </div>
        <div className="bg-indigo-500 rounded flex justify-center items-center h-10">
          9
        </div>
        <div className="bg-indigo-500 rounded flex justify-center items-center h-10">
          10
        </div>
        <div className="bg-indigo-500 rounded flex justify-center items-center h-10">
          11
        </div>
        <div className="bg-indigo-500 rounded flex justify-center items-center h-10">
          12
        </div>

        <Box className="col-start-1 col-end-13 md:col-start-2 md:col-end-12 lg:col-start-3 lg:col-end-11 xl:col-start-4 xl:col-end-10">
          start - end
        </Box>

        <Box className="col-start-2 col-span-10">start - span</Box>

        <Box className="col-end-12 col-span-10">span - end</Box>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="col-start-1 col-end-13 md:col-start-2 md:col-end-12 lg:col-start-3 lg:col-end-11 xl:col-start-4 xl:col-end-10"
        >
          <Input name="nome" label="Pessoa do <3" defaultValue="" />

          <Input name="birthday" label="Aniversário" defaultValue="" />

          <div className="flex mt-4">
            <Button type="submit" variant="primary" className="ml-auto">
              Salvar
            </Button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default Home;
