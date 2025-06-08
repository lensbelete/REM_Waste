import { Flex, Text, Title, Burger, Drawer } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { ProgressStep } from './Stepper';
import { IconArrowRight } from '@tabler/icons-react';

const steps = [
  {
    step: 1,
    label: "Postcode",
    completed: true,
    active: false,
  },
  {
    step: 2,
    label: "Waste Type",
    completed: true,
    active: false,
  },
  {
    step: 3,
    label: "Select Skip",
    completed: false,
    active: true,
  },
  {
    step: 4,
    label: "Permit Check",
    completed: false,
    active: false,
  },
  {
    step: 5,
    label: "Choose Date",
    completed: false,
    active: false,
  },
  {
    step: 6,
    label: "Payment",
    completed: false,
    active: false,
  },
];

export const Header = () => {
  const [opened, { toggle, close }] = useDisclosure(false);

  return (
    <header className="bg-[#F5F5F5] text-white p-10 shadow-md mb-10">
 
      <div className="md:hidden flex justify-end">
        <Burger opened={opened} onClick={toggle} color="black" />
      </div>

      <div className="hidden md:flex flex-wrap justify-center gap-2 md:gap-6 cursor-pointer items-center">
        {steps.map((step, index) => (
          <div key={step.step} className="flex items-center">
            <ProgressStep
              step={step.step}
              label={step.label}
              completed={step.completed}
              active={step.active}
            />
            {index < steps.length - 1 && (
              <IconArrowRight size={24} color="black"  className='ml-5'/>
            )}
          </div>
        ))}
      </div>

      <Drawer
        opened={opened}
        onClose={close}
        title="Progress"
        position="right"
        size="xs"
        classNames={{
          title: 'text-black font-bold',
          content: 'bg-[#F5F5F5]',
        }}
      >
        <div className="flex flex-col gap-4">
          {steps.map((step) => (
            <ProgressStep
              key={step.step}
              step={step.step}
              label={step.label}
              completed={step.completed}
              active={step.active}
            />
          ))}
        </div>
      </Drawer>

      <Flex direction="column" align="center" justify="center" gap="md" className="mt-10">
        <div>
          <Title order={2} className="text-black">
            Choose Your Skip Size
          </Title>
        </div>
        <div>
          <Text c="black">
            Select the skip size that best suits your needs
          </Text>
        </div>
      </Flex>
    </header>
  );
};