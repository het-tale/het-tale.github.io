import {
    Avatar,
    Button,
    Card,
    CardBody,
    CardHeader,
    Flex,
    Heading,
    Link,
    Text
} from '@chakra-ui/react';

interface ProjectDescProps {
    title: string;
    description: string;
    link: string;
    img: string;
    name: string;
}
const ProjectDesc = (props: ProjectDescProps) => {
    return (
        <Card border={'1px solid rgba(182, 187, 196, 0.4)'} align={'center'}>
            <CardHeader>
                <Flex>
                    <Avatar src={props.img}></Avatar>
                    <Heading size="md" className="mt-3 font-ruby">
                        {props.title}
                    </Heading>
                </Flex>
            </CardHeader>
            <CardBody>
                <Text className="font-ruby" marginTop={'-22px'}>
                    {props.description}
                </Text>
                <Button
                    className="text-center mt-6 text-decoration-none"
                    marginRight={'auto'}
                    marginLeft={'6rem'}
                    color={'#a435f0'}
                >
                    <Link href={props.link} target="_blank">
                        {props.name}
                    </Link>
                </Button>
            </CardBody>
        </Card>
    );
};
export default ProjectDesc;
