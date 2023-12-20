import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import Introduce from './Componenets/Introduce';

function App() {
    return (
        <ChakraProvider>
            <Introduce />
        </ChakraProvider>
    );
}

export default App;
