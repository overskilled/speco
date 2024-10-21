import { Container, Flex, Spinner, Text } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import Textbook from '../../components/Textbooks/Textbook';
import { useParams } from 'react-router-dom';
import useGetTextbook from '../../hooks/useGetTextbook';

const Textbooks = () => {
    const { subjectName } = useParams();
    const { getTextbook, loadingTextbook, textbookData = [] } = useGetTextbook(); // Default to an empty array

    useEffect(() => {
        if (subjectName) {
            getTextbook({ subject: subjectName });
        }
    }, [subjectName]); // Dependency array includes subjectName

    return (
        <Container maxW={'full'} padding={5}>
            {loadingTextbook ? (
                <Flex justifyContent={"center"} alignItems={"center"} h={"80vh"}>
                    <Spinner size="lg" />
                </Flex>
            ) : (
                <>
                    {textbookData.length === 0 ? (
                        <Text>No Textbook for this subject yet. Give us some time, Check other subjects e.g Informatique 😢</Text>
                    ) : (
                        <Flex wrap="wrap" justifyContent="space-around" gap={1}>
                            {textbookData.map((textbook, index) => (
                                <Textbook key={index} {...textbook} width="100%" mb={4} />
                            ))}
                        </Flex>
                    )}
                </>
            )}
        </Container>
    );
};

export default Textbooks;
