import { Button, Flex, Group, Modal, Text, ThemeIcon } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconAlertCircle, IconCheck } from '@tabler/icons-react';

export const ContinueModal = () => {
const [opened, { open, close }] = useDisclosure(false);

    return (
    <>
      <Modal opened={opened} onClose={close}  centered size={'lg'}>
        <div className='w-full'>
      <Flex direction="row" align="flex-start" gap="sm" wrap="nowrap">
  <ThemeIcon color="red" variant="transparent" size="lg" mt={4}>
    <IconAlertCircle />
  </ThemeIcon>
  <Text size="sm">
    Imagery and information shown throughout this website may not reflect the exact shape or size specification. Colours may vary, and options and/or accessories may be featured at additional cost.
  </Text>
</Flex>



            <Group justify="flex-end" className="mt-4">
                <Button onClick={close}>Continue</Button>
            </Group>
           
        </div>
      </Modal>

    <ThemeIcon
      color="green"
      variant="outline"
      size="lg"
      radius="md"
      onClick={(e) => {
        e.stopPropagation();
        open();
      }}
      title="Confirm selection"
      style={{ transition: 'transform 0.15s' }}
      className="hover:-translate-y-1 cursor-pointer"
    >
      <IconCheck />
    </ThemeIcon>
    </>

  )
}


