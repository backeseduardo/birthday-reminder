import Button from '../../components/Button';

function Home() {
  return (
    <div className="h-full mx-4">
      <header className="flex justify-between items-center border-b mb-4">
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
      </main>
    </div>
  );
}

export default Home;
