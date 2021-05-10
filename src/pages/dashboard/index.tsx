import dynamic from 'next/dynamic'
import { Flex, SimpleGrid, Box, Text } from '@chakra-ui/react'
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import { theme } from '@/styles/theme';
import { ApexOptions } from 'apexcharts';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

const options: ApexOptions = {
  chart: {
    toolbar: { show: false },
    zoom: { enabled: false },
    foreColor: theme.colors.gray[500],
  },
  grid: { show: false },
  dataLabels: { enabled: false },
  tooltip: { enabled: false },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      color: theme.colors.gray[500],
    },
    axisTicks: {
      color: theme.colors.gray[500],
    },
    categories: [
      // '2021-05-08T00:00:00.000Z',
      '2021-05-08',
      '2021-05-09',
      '2021-05-10',
      '2021-05-11',
      '2021-05-12'
    ]
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3
    }
  }
}

const series = [
  { name: 'series1', data: [1, 2, 3, 10, 5] }
]

function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
        <Sidebar />

        <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
          <Box p={["4", "8"]} bg="gray.800" borderRadius="8" pb="4">
            <Text fontSize="lg" mb="4">Inscritos da Semana</Text>
            <Chart options={options} series={series} type="area" height={160} />
          </Box>
          <Box p={["4", "8"]} bg="gray.800" borderRadius="8">
            <Text fontSize="lg" mb="4">Inscritos da Semana</Text>
            <Chart options={options} series={series} type="area" height={160} />
          </Box>

        </SimpleGrid>

      </Flex>
    </Flex>
  );
};

export default Dashboard;
