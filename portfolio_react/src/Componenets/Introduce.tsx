import Navbar from './Navbar';
import { Flex, Img, Portal, Text } from '@chakra-ui/react';
import '../Css/style.css';
import Work from './Work';
import GetInTouch from './GetInTouch';
import About from './About';
const Introduce = () => {
    return (
        <>
            <Portal>
                <Navbar />
            </Portal>
            <Portal>
                <Flex className="mt-12" flexDirection={'column'} zIndex={-1}>
                    <h1 className="text-4xl font-bold text-center sm:text-center">
                        Frontend Developer
                    </h1>
                    <Text className="text-xl text-center mt-6 sm:text-center">
                        I Solve problems by writing clean and readable{' '}
                        <span style={{ color: '#a435f0' }}>code</span>
                    </Text>
                    <Img
                        src="/assets/melink.jpg"
                        w={'200px'}
                        h={'200px'}
                        borderRadius={'50%'}
                        alignSelf={'center'}
                        className="mt-12"
                    ></Img>
                </Flex>
            </Portal>
            <Portal>
                <About />
                <Work />
                <GetInTouch />
            </Portal>
        </>
    );
};

export default Introduce;
