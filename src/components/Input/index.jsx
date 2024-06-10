import React from 'react';
import { Field, ErrorMessage } from 'formik';
import styled from 'styled-components';

// Styled components
const Container = styled.div`
    margin-bottom: 15px;
`;

const Label = styled.label`
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
`;

const InputField = styled(Field)`
    width:100%;
    padding: 8px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
`;

const InputFile = styled.input`
    width: 100%;
    padding: 8px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    cursor: pointer;
`;

const Error = styled.div`
    color: red;
    font-size: 14px;
    margin-top: 5px;
`;

const CustomInput = ({ label, name, type, setFieldValue, ...rest }) => {
    return (
        <Container>
            <Label htmlFor={name}>{label}</Label>
            {type === 'file' ? (
                <InputFile 
                    name={name} 
                    type={type} 
                    onChange={(event) => {
                        setFieldValue(name, event.currentTarget.files[0]);
                    }} 
                />
            ) : (
                <InputField name={name} type={type} {...rest} />
            )}
            <ErrorMessage name={name} component={Error} />
        </Container>
    );
};

export default CustomInput;
