import {
    Box,
    Text,
    Drawer,
    DrawerBody,
    Flex,
    Img,
    ListItem,
    UnorderedList,
    IconButton,
    useMediaQuery,
    useDisclosure,
    DrawerCloseButton,
    Portal,
    Link
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import React from 'react';

const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [isHidden, setIsHidden] = useState('block');
    const { isOpen, onOpen, onClose } = useDisclosure();

    const [isSmallerThanMd] = useMediaQuery('(max-width: 48em)');

    React.useEffect(() => {
        setIsMobile(isSmallerThanMd);
    }, [isSmallerThanMd]);

    const handleToggle = () => {
        onOpen();
        setIsHidden('none');
    };
    const handleIcon = () => {
        isHidden === 'none' ? setIsHidden('block') : setIsHidden('none');
    };

    React.useEffect(() => {
        if (!isMobile) {
            onClose();
        }
    }, [isMobile]);
    return (
        <div>
            <Flex
                justifyContent={'space-between'}
                marginLeft={20}
                marginRight={20}
                marginTop={5}
            >
                <Link href="/">
                    <Img
                        src="/assets/heb.png"
                        alt="logo"
                        width="100px"
                        height="100px"
                        marginLeft={isMobile ? '-5rem' : '0'}
                    ></Img>
                </Link>

                <UnorderedList
                    listStyleType={'none'}
                    display={{ base: 'none', md: 'block' }}
                >
                    <Flex
                        flexDirection={'row'}
                        justifyContent={'space-between'}
                        padding={25}
                        fontFamily={'Rubik'}
                    >
                        <ListItem marginRight={12}>
                            <Link href="#about" color={'#000'}>
                                About
                            </Link>
                        </ListItem>
                        <ListItem marginRight={12}>
                            {' '}
                            <Link href="#work" color={'#000'}>
                                Projects
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="#contact" color={'#000'}>
                                Contact
                            </Link>
                        </ListItem>
                    </Flex>
                </UnorderedList>
                <Box
                    display={{ base: isHidden, md: 'none' }}
                    marginTop={6}
                    marginRight={'-35rem'}
                >
                    <IconButton
                        icon={<HamburgerIcon />}
                        onClick={handleToggle}
                        variant="outline"
                        aria-label={''}
                    />
                </Box>
                <Box display={{ base: 'block', md: 'none' }} marginTop={5}>
                    <Drawer placement="right" isOpen={isOpen} onClose={onClose}>
                        <DrawerCloseButton onClick={handleIcon} marginTop={5} />
                        <DrawerBody
                            color={'#a435f0'}
                            width={'100%'}
                            textAlign={'center'}
                        >
                            <Flex direction="column" fontFamily={'Rubik'}>
                                <Box marginBottom="4">
                                    <Text>Home</Text>
                                </Box>
                                <Box marginBottom="4">
                                    <Text>About</Text>
                                </Box>
                                <Box>
                                    <Text>Contact</Text>
                                </Box>
                            </Flex>
                        </DrawerBody>
                    </Drawer>
                </Box>
            </Flex>
        </div>
    );
};
export default Navbar;
