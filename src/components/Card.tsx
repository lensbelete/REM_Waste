import { Card, Image, Text, Button, Flex, Group, Divider } from '@mantine/core';
import image from '../assets/image.png';
import { IconCalendar, IconCircleCheck, IconTruck } from '@tabler/icons-react';

type WasteCardProps = {
  size: number;
  selected: boolean;
  price: number;
  period: number;
  placement: boolean;
  onSelect: () => void;
};

export const WasteCard = ({
  size,
  selected,
  price,
  period,
  placement,
  onSelect,
}: WasteCardProps) => {
  return (
    <Card
      shadow="none"
      padding="xl"
      radius="md"
      withBorder
      className={`flex items-start cursor-pointer transition-all duration-200 ${selected ? 'shadow-lg scale-[1.02] border-2 border-green-800' : ''} hover:shadow-lg hover:scale-[1.02]`}
    >
      <Card.Section style={{ position: 'relative' }}>
      <Image src={image} height={160} alt="Skip Image" opacity={30} />
      </Card.Section>

      <Flex direction="column" align="flex-start" gap="md" className="w-full mt-10">
      <Group justify="space-between" className="w-full">
        <Text fw={500} size="lg">
        {size} Yard Skip
        </Text>
        {selected && <IconCircleCheck color="green" />}
      </Group>

      <Group gap="sm">
        <IconCalendar size={18} color="gray" />
        <Text size="sm" c="dimmed">
        {period} days hire period
        </Text>
        <Group>
        <IconTruck size={18} color={placement ? 'green' : 'red'} />
        <Text size="sm" c={placement ? 'green' : 'red'}>
          {placement ? 'Allowed on Road' : 'Not Allowed on Road'}
        </Text>
        </Group>
      </Group>
      </Flex>

      <div className="w-full mt-10">
      <Divider />
      </div>

      <Text size="xl" color="blue" fw={700} mt="md" mb="xs">
      £ {price}
      </Text>

      <Button color={selected ? 'green' : 'blue'} fullWidth mt="md" radius="md" onClick={onSelect}>
      {selected ? 'Selected' : 'Select This Skip'}
      </Button>
    </Card>
  );
};
