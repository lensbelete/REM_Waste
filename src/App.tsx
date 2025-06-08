import { SimpleGrid, Skeleton, Center, Text } from '@mantine/core';
import { WasteCard } from './components/Card';
import { useEffect, useState } from 'react';
import axios from 'axios';

type Skip = {
  id: number;
  price_before_vat: number;
  hire_period_days: number;
  size: number;
  allowed_on_road: boolean;
};

function App() {
  const [skips, setSkips] = useState<Skip[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  useEffect(() => {
    const fetchSkips = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          'https://app.wewantwaste.co.uk/api/skips/by-location',
          {
            params: {
              postcode: 'NR32',
              area: 'Lowestoft',
            },
          }
        );
        setSkips(response.data);
      } catch (error) {
        console.error("Failed to fetch skips", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSkips();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-8">
        <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing="lg">
          {loading ? (
            Array.from({ length: 4 }).map((_, idx) => (
              <Skeleton height={320} radius="md" key={idx} />
            ))
          ) : skips.length > 0 ? (
            skips.map((skip) => (
              <WasteCard
                key={skip.id}
                selected={selectedId === skip.id}
                price={skip.price_before_vat}
                period={skip.hire_period_days}
                size={skip.size}
                placement={skip.allowed_on_road}
                onSelect={() => setSelectedId(skip.id)}
              />
            ))
          ) : (
            <Center w="100%" py="xl">
              <Text color="dimmed">No skips available in this area.</Text>
            </Center>
          )}
        </SimpleGrid>
      </main>
    </div>
  );
}

export default App;
