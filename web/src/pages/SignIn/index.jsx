import { useEffect, useState } from 'react';

function SignIn() {
  const [num, setNum] = useState(0);

  useEffect(() => {
    setNum(1);
  }, []);

  return (
    <div
      className="h-full mx-4"
      style={{
        minWidth: '20rem',
      }}
    >
      teste {num}
    </div>
  );
}

export default SignIn;
