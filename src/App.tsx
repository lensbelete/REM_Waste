import {  SimpleGrid } from '@mantine/core';
import { WasteCard } from './components/Card';
import { useEffect, useState } from 'react';
import axios from 'axios';


type Skip = {
  id: number;
  price_before_vat: number;
  hire_period_days: number;
  size: number;
};

function App() {
    const [skips, setSkips] = useState<Skip[]>([]);
  const [loading, setLoading] = useState(true);
  console.log(loading);
 useEffect(() => {
    const fetchSkips = async () => {
      try {
        console.log('fetching')
        const response = await axios.get(
          'https://app.wewantwaste.co.uk/api/skips/by-location',
          {
            params: {
              postcode: 'NR32',
              area: 'Lowestoft'
            }
          }
        );
        setSkips(response.data);
        setLoading(false);
      } catch {
        setLoading(false);
      }
    };

    fetchSkips();
  }, []);

  console.log(skips);
  return (
      <div className="min-h-screen bg-gray-50">
        <main className="container mx-auto px-4 py-8">
           <SimpleGrid cols={{ base: 1, sm: 2, lg: 4}}>
             {skips.map((skip) =>
            <WasteCard key={skip.id} 
            selected={false} 
            price={skip.price_before_vat} 
            period={skip.hire_period_days} 
            size={skip.size}/>
          ) 
          }
     
    </SimpleGrid> 
    <div>do sth</div>

         
        </main>
      </div>
  );
}

export default App;