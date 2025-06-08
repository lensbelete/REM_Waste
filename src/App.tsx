import { Button } from '@mantine/core';

function App() {
  return (
      <div className="min-h-screen bg-gray-50">
        <main className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome to Your App
          </h1>
          <Button color='green' className='mt-24'>Click me</Button>
        </main>
      </div>
  );
}

export default App;