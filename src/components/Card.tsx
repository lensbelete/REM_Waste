import { Card, Image, Text, Button, Flex, Group, Divider } from '@mantine/core';
import image from '../assets/image.png';
import { IconCalendar } from '@tabler/icons-react';

type WasteCardProps = {
  size: number;
  selected: boolean;
  price: number;
  period: number;
};
export const WasteCard = ({size, selected, price, period} : WasteCardProps) => {
  return (  
    <Card shadow="none" padding="xl" radius="md" h={'500px'} mah={'500px'} withBorder className='flex items-start' color={'#F5F5F5'} >
    <Card.Section style={{ position: 'relative' }}>
        <Image
            src={image}
            height={160}
            alt="Skip Image"
            opacity={30}
        />
    </Card.Section>
    <Flex direction="column"  gap="md">
           <Text fw={500}>{size} Yard Skip</Text>
      <Group>
        <IconCalendar/>
        <Text size="sm" c={'dimmed'}>{period} days hire period</Text>
      </Group>
        <Divider my="md" />

                 
                    
                
      <Text size="xl">
        £{price}
      </Text>

    </Flex>

   

     

      <Button color="blue" fullWidth mt="md" radius="md">
        {selected ? 'Selected' : 'Select This Skip'} 
      </Button>
    </Card>
    
  )
}

export default Card