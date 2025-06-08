import { Card, Image, Text, Button, Flex, Group, Divider } from '@mantine/core';
import image from '../assets/image.png';
import image3 from '../assets/image3.png';
import { IconCalendar, IconTruck } from '@tabler/icons-react';
import { ContinueModal } from './Modal';

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
      shadow={selected ? "xl" : "sm"}
      padding="xl"
      radius="md"
      withBorder
      onClick={onSelect}
      className={`flex items-start cursor-pointer transition-all duration-200 ${
        selected
          ? 'shadow-green-500 shadow-md scale-[1.03]'
          : ''
      } hover:shadow-lg hover:scale-[1.02]`}
      style={selected ? { borderColor: '#22c55e', boxShadow: '0 4px 12px rgba(34, 197, 94, 0.4)' } : {}}
    >
      <Card.Section style={{ position: 'relative' }}>
        <Image src={size <= 14 ? image : image3} height={160} alt="Skip Image" opacity={30} />
      </Card.Section>

      <Flex direction="column" align="flex-start" gap="md" className="w-full mt-10">
        <Group justify="space-between" className="w-full">
          <Text fw={500} size="lg">
            {size} Yard Skip
          </Text>
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

      <Text size="xl" c="blue" fw={700} mt="md" mb="xs">
        £ {price}
      </Text>
      <Group justify="space-between" mt="md" className="w-full">
        <Button
          color={selected ? 'green' : 'blue'}
          radius="md"
          onClick={onSelect}
          style={selected ? { flex: 1, marginRight: 8 } : { flex: 1 }}
        >
          {selected ? 'Selected' : 'Select This Skip'}
        </Button>
        {selected && (
          <ContinueModal />
        )}
      </Group>
    </Card>
  );
};