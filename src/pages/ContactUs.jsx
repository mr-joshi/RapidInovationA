import React, { useState } from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import CustomInput from '../components/Input';
import styled from 'styled-components';
import Modal from '../components/Modal';
import { Link } from 'react-router-dom';



const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  background-color:  ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  gap: 16px;
  padding: 24px 16px;
  @media (max-width: 982px) {
      padding: 12px 8px;
      grid-auto-flow: row;
  }
  gap: 20px;
  padding:40px;
`
const ContactData = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 982px) {
      padding: 0 40px;
  }
`
const ContactHeading = styled.h1`
  font-size: 40px;
  text-align: center;
`
const ContactHeading2 = styled.h4`
  font-size: 28px;
  text-align: center;
`
const StyledForm = styled(Form)`
  display: grid;
  gap: 20px;
  padding: 40px;
`;

const FormContainer = styled.div`
  display: grid;
  gap: 10px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-weight: bold;
`;

const FileInput = styled.input`
  margin-top: 5px;
`;

const SubmitButton = styled.button`
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #45a049;
  }
`;
const Error = styled.div`
  color: red;
  font-size: 14px;
  margin-top: 5px;
`;

const ModalDIv=styled.div`
  max-width:300px;
`
const ModalImg=styled.img`
width:300px;
`
const ModalButton=styled(Link)`
padding:20px;
text-align:center;
display: flex;
justify-content: center;
color: ${(props) => props.theme.text};
`

const ContactUs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submittedValues, setSubmittedValues] = useState(null);

  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    address: Yup.string().required('Required'),
    dateOfBirth: Yup.date().required('Required'),
    bio: Yup.string().required('Required'),
    profileImage: Yup.mixed()
    .test('fileType', 'Invalid file format, only images are allowed', (value) => {
      if (value) {
        return value && ['image/jpeg', 'image/png', 'image/gif'].includes(value.type);
      }
      return true; // if field is empty, let required() handle it
    })
    .required('Required'),
  });

  const onSubmit = async (values, { setSubmitting }) => {
    try {
      const profileImageBase64 = await convertToBase64(values.profileImage);
      const profileData = {
        name: values.name,
        email: values.email,
        profileImage: profileImageBase64,
        address:values.address,
        bio:values.bio,
        dateOfBirth:values.dateOfBirth

      };
      setSubmittedValues(profileData);
      setIsModalOpen(true);
    } catch (error) {
      console.error('Error submitting form: ', error);
    } finally {
      setSubmitting(false);
    }
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSubmittedValues(null);
  };

  return (
    <div>
      <Container>
        <ContactData>
          <ContactHeading>Get in Touch</ContactHeading>
          <ContactHeading2>This is Kamal Kishore Joshi. Get in touch with me, hehe.</ContactHeading2>
        </ContactData>
        <Formik
          initialValues={{
            name: '',
            email: '',
            address: '',
            dateOfBirth: '',
            bio: '',
            profileImage: null,
            bannerImage: null
          }}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ setFieldValue }) => (
            <StyledForm>
              <FormContainer>
                <InputContainer>
                  <Label htmlFor="name">Name</Label>
                  <CustomInput name="name" type="text" />
                </InputContainer>
                <InputContainer>
                  <Label htmlFor="email">Email</Label>
                  <CustomInput name="email" type="email" />
                </InputContainer>
                <InputContainer>
                  <Label htmlFor="address">Address</Label>
                  <CustomInput name="address" type="text" />
                </InputContainer>
                <InputContainer>
                  <Label htmlFor="dateOfBirth">Date of Birth</Label>
                  <CustomInput name="dateOfBirth" type="date" />
                </InputContainer>
                <InputContainer>
                  <Label htmlFor="bio">Bio</Label>
                  <CustomInput name="bio" resize="none" />
                </InputContainer>
              </FormContainer>
              <InputContainer>
                <Label htmlFor="profileImage">Profile Image</Label>
                <FileInput name="profileImage" type="file" onChange={(event) => {
                  setFieldValue("profileImage", event.currentTarget.files[0]);
                }} />
                <ErrorMessage name="profileImage" component={Error} />
              </InputContainer>
              <SubmitButton type="submit">Submit</SubmitButton>
            </StyledForm>
          )}
        </Formik>
      </Container>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
          {submittedValues && (
            <>
         
         <h2>Submitted Values:</h2>
         <ModalDIv>
           <p>Name: {submittedValues.name}</p>
           <p>Email: {submittedValues.email}</p>
           <p>address: {submittedValues.address}</p>
           <p>dateOfBirth: {submittedValues.dateOfBirth}</p>
           <p>bio: {submittedValues.bio}</p>
           <p>Profile Image:</p>
           
           <ModalImg src={submittedValues.profileImage} alt="Profile" />
           <ModalButton to="/">Return to home</ModalButton>
         </ModalDIv>
       </>
     )}
</Modal>
</div>
);
};

export default ContactUs;
