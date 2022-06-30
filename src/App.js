import React from 'react';
import {
  ChakraProvider,
  Box,
  VStack,
  Grid,
  theme,
  Heading,
} from '@chakra-ui/react';
import FormComponent from './components/FormComponent';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <VStack spacing={8} mt={[4, 8]}>
            <Heading>fakeco form</Heading>
            <FormComponent />
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
