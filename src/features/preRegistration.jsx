import { useEffect, useState } from "react";
import { useForm, Controller, useFieldArray, useWatch } from "react-hook-form";
import styled from "styled-components";
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup"
import React from "react";
import axios from 'axios';

import Form from '../ui/Form';
import FormRow from "../ui/FormRow";
import Input from "../ui/Input";
import Select from "../ui/Select";
import StyledSelectDiv from "../ui/StyledSelectDiv";
import CategoryOption from "../ui/CategoryOption";
import Option from "../ui/Option";
import Button from "../ui/Button";
import SubForm from "../ui/SubForm";
import { StyledFieldList } from "../ui/StyledFieldList";
import GenderRadioGroup from "../ui/GenderRadioGroup";
import StyledLink from "../ui/StyledLink";
import { DynamicFieldsList, DynamicFieldsListItem } from "../ui/DynamicFieldsList";
import CompactFormControl from "../ui/CompactFormControl";
import GenderRadioGroupCompact from "../ui/GenderRadioGroupCompact";

const StyledError = styled.div`
    font-size: 1.4rem;
    color: var(--color-red-700);
    padding: 1rem 1.5rem;


    
    margin-bottom: 1rem;
    background-color: white;
`;

const StyledForm = styled.div`
    padding: 2.5rem 2rem; /* Adjust padding as needed */
    margin-top:1rem;
  
    
  
    h1 {
        font-size: 1.8rem; /* Adjust font size as needed */
        margin-bottom: 1.5rem; /* Adjust margin as needed */
        color: white;
        font-family: 'Arial', sans-serif; /* Change font family */
        text-align: center;
    }
        
`;



const formSchema = yup.object({
    name: yup.string().required('Name is required'),
    age: yup.number().transform(value => (isNaN(value) ? undefined : value)).typeError('Age should be a valid number').positive().integer().required('Age is required'),
    gender: yup.string().required('Gender is required'),
    occupation: yup.string().required('Occupation is required'),
    contact: yup.string().transform(value => (!value ? undefined : value)).matches(/^((\+|00)?968)?[279]\d{7}$/, 'Please enter valid phone number').required('Contact Number is required'),
    email: yup.string().email('Please enter a valid email').required('Email is required'),
    teamName: yup.string().required('Team Name is required'),
    participants: yup.array().when('category', ([category], schema) => {
        let validator;
        let minAge, maxAge;

        if (category === 'junior') {
            minAge = 8;
            maxAge = 12;
            
        } 
        else if(category === "miniMarvel"){
            minAge = 5;
            maxAge = 8;
        }
        else if (category === 'subJunior') {
            minAge = 12;
            maxAge = 17;
        } else if (category === 'crew') {
            minAge = 8;
            maxAge = 90;
        } else {
            minAge = 8;
            maxAge = 90;
        }

        validator = yup.array().of(yup.object().shape({
            name: yup.string().required('Name is required'),
            age: yup.number().transform(value => (isNaN(value) ? undefined : value)).typeError('Age should be a valid number').positive().integer().required('Age is required').min(minAge, `Age should be greater than or equal to ${minAge}`).max(maxAge,  `Age should be less than or equal to ${maxAge}`),
            gender: yup.string().required('Gender is required'),
            occupation: yup.string().required('Occupation is required'),
        }))

        return validator;
    }),
    category: yup.string().required('Category is required'),
    type: yup.string().when('category',([category], schema) => {
        if(category === 'junior' || category === 'subJunior'){
            return schema.required('Type is required')
        }

        return schema;
    }),
})

function PreRegisteration() {
    const [errorMessage, setErrorMessage] = useState('');
    const { register, handleSubmit, control, reset, getValues, formState , resetField} = useForm({
        resolver: yupResolver(formSchema)
    });
    const { errors } = formState;
    const category = useWatch({ control, name: "category" });
    const type = useWatch({ control, name: "type" });
    const { fields, append, remove, replace } = useFieldArray({
        control,
        name: "participants",
    });

    const [successMessage, setSuccessMessage] = useState('');

    useEffect(() => {
        if (category === "crew" || category === "miniMarvel" ) {
            replace(Array.from({ length: 9 }, () => ({ name: '', age: null, gender: null, occupation:'' })));
        } else if (category === "junior" || category === "subJunior") {
            const counts = {
                trio: 3,
                mini: 8,
                mega: 9,
            };
            const count = counts[type] || 0;
            replace(Array.from({ length: count }, () => ({ name: '', age: null, gender: null, occupation:'' })));
        }else{
            replace([])
        }

        resetField('participants')
    }, [category, replace]);

    useEffect(() => {
        if ((category === "junior" || category === "subJunior")) {
           if(type){
                const counts = {
                    trio: 3,
                    mini: 8,
                    mega: 9,
                };
                const count = counts[type] || 0;
                replace(Array.from({ length: count }, () => ({ name: '', age: null, gender: null, occupation:'' })));
           }else{
                replace([])
           }

           resetField('participants')
        }
    }, [category, type, replace]);

    // useEffect(() => {
    //     if ((category === "junior" || category === "subJunior") && type) {
    //         const counts = {
    //             trio: 3,
    //             mini: 8,
    //             mega: 9,
    //         };
    //         const count = counts[type] || 0;
    //         replace(Array.from({ length: count }, () => ({ name: '', age: null, gender: null })));
    //     }
    // }, [category, type, replace, fields.length]);

    function resetForm() {
        remove();
        reset();
        setErrorMessage('')
    }

    async function onSubmit(data) {
        console.log('request payload: ', data)

        try {
            const response = await axios.post('', data);
            console.log('Server response:', response.data);
            setSuccessMessage('Pre-registration successful!');
            resetForm();
            setErrorMessage('')
        } catch (error) {
            console.error('Registration failure: Error', error);
            setErrorMessage('Registraion failure. Please provide valid data') 
        }
    }



    function onError(errors) {
        console.error('Form submission error: ', errors);
        setErrorMessage('Failed to submit form. Provide valid data')
    }

    const handleAddMemberBtnClick = () => {

        if(fields.length === 20){
            return;
        }

        append({
            name: '',
            age: null,
            gender: null
        })
    }

    const handleRemoveMemberBtnClick = () => {
        remove(fields.length - 1)
    }
    return (
        <StyledForm>
            {errorMessage && <StyledError>{errorMessage}</StyledError>}
                <h1>PRE-REGISTER FORM</h1>
            <Form onSubmit={handleSubmit(onSubmit, onError)}>
               
                <FormRow label='Name' error={errors?.name?.message}>
                    <Input
                        type='text'
                        id='name'
                        {...register("name")}
                    />
                </FormRow>
                <FormRow label='Age' error={errors?.age?.message}>
                    <Input
                        type='number'
                        id='age'
                        {...register("age")}
                    />
                </FormRow>
                <GenderRadioGroup error={errors?.gender?.message}>
                    <Input
                        type='radio'
                        name='gender'
                        id='male'
                        value='male'
                        {...register("gender")}
                    />
                    <GenderRadioGroup.Label htmlFor='male'>Male</GenderRadioGroup.Label>
                    <Input
                        type='radio'
                        name='gender'
                        id='female'
                        value='female'
                        {...register("gender")}
                    />
                    <GenderRadioGroup.Label htmlFor='female'>Female</GenderRadioGroup.Label>
                </GenderRadioGroup>
                <FormRow label='School/College/Work' error={errors?.occupation?.message}>
                    <Input
                        type='text'
                        id='occupation'
                        {...register("occupation")}
                    />
                </FormRow>
                <FormRow label='Contact Number' error={errors?.contact?.message}>
                    <Input
                        type='text'
                        id='contact'
                        {...register("contact")}
                    />
                </FormRow>
                <FormRow label='E-Mail ID' error={errors?.email?.message}>
                    <Input
                        type='email'
                        id='email'
                        {...register("email")}
                    />
                </FormRow>
                <FormRow label='Team Name' error={errors?.teamName?.message}>
                    <Input
                        type='text'
                        id='Teamname'
                        {...register("teamName")}
                    />
                </FormRow>
                <FormRow label='Category' error={errors?.category?.message}>
                    <StyledSelectDiv>
                        <Select id='category' {...register("category")}>
                            <CategoryOption />
                        </Select>
                    </StyledSelectDiv>

                </FormRow>

                {(category === "junior" || category === "subJunior") && (
                    <FormRow label='Sub Category' error={errors?.type?.message}>
                        <StyledSelectDiv>
                            <Select id='type' {...register("type")}>
                                <Option />
                            </Select>
                        </StyledSelectDiv>

                    </FormRow>
                )}

                { fields.length ? (
                    <>
                    <h4 style={{ marginTop: '1rem'}}>Participants</h4>
                    <DynamicFieldsList>
                        <DynamicFieldsListItem></DynamicFieldsListItem>
                        <DynamicFieldsListItem>Name</DynamicFieldsListItem>
                        <DynamicFieldsListItem>Age</DynamicFieldsListItem>
                        <DynamicFieldsListItem>Gender</DynamicFieldsListItem>
                        <DynamicFieldsListItem>School/College/Work</DynamicFieldsListItem>
                    </DynamicFieldsList>
                    </>
                ) : null}

                
                {fields.map((field, index) => (
                    <DynamicFieldsList key={field.id}>
                        <DynamicFieldsListItem className="label">
                            Participant {index + 1} 
                        </DynamicFieldsListItem>
                        <DynamicFieldsListItem>
                            <CompactFormControl label={'Name'} error={errors.participants && errors.participants[index] && errors.participants[index].name?.message}>
                                <Input
                                    type='text'
                                    {...register(`participants.${index}.name`)}
                                />
                            </CompactFormControl>
                        </DynamicFieldsListItem>
                        <DynamicFieldsListItem>
                            <CompactFormControl label={'Age'}  error={errors.participants && errors.participants[index] && errors.participants[index].age?.message}>
                                <Input
                                    type='text'
                                    {...register(`participants.${index}.age`)}
                                />
                            </CompactFormControl>
                        </DynamicFieldsListItem>
                        <DynamicFieldsListItem>
                            <CompactFormControl label={'Gender'}  error={errors.participants && errors.participants[index] && errors.participants[index].gender?.message}>
                                <GenderRadioGroupCompact>
                                    <Input
                                        type='radio'
                                        name='gender'
                                        id={`participants.${index}.male`}
                                        value='male'
                                        {...register(`participants.${index}.gender`)}
                                    />
                                    <GenderRadioGroupCompact.Label htmlFor={`participants.${index}.male`}>Male</GenderRadioGroupCompact.Label>
                                    <Input
                                        type='radio'
                                        name='gender'
                                        id={`participants.${index}.female`}
                                        value='female'
                                        {...register(`participants.${index}.gender`)}
                                    />
                                    <GenderRadioGroupCompact.Label htmlFor={`participants.${index}.female`}>Female</GenderRadioGroupCompact.Label>
                                </GenderRadioGroupCompact>
                            </CompactFormControl>
                        </DynamicFieldsListItem>
                        <DynamicFieldsListItem>
                            <CompactFormControl label={'School/College/Work'} error={errors.participants && errors.participants[index] && errors.participants[index].occupation?.message}>
                                <Input
                                    type='text'
                                    {...register(`participants.${index}.occupation`)}
                                />
                            </CompactFormControl>
                        </DynamicFieldsListItem>
                    </DynamicFieldsList>
                ))}
                {(category === "crew" || category === "miniMarvel" || (category && type === "mega")) && (
                    <FormRow>
                        {fields.length > 0 && (
                            <Button
                                $variation='secondary'
                                onClick={handleRemoveMemberBtnClick}
                            >
                                Remove Last Input
                            </Button>
                        )}
                        <Button type='button' onClick={handleAddMemberBtnClick}>
                            Add Member
                        </Button>
                    </FormRow>
                )}
                {/* <FormRow label='Age Verification ID Number for all Participants' error={errors?.ageVerificationId?.message} inputId='Teamname'>
                    <Input
                        type='text'
                        id='ageVerificationId'
                        {...register("ageVerificationId")}
                    />
                    <StyledLink href="https://docs.google.com/forms/d/e/1FAIpQLSc5AjPqX7gqLb8s6cI65-XsueTupNbzZ61SKCE4ZETmI0JnSQ/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer"> Click on this link to Upload the Details</StyledLink>
                </FormRow> */}
                <FormRow>
                    <Button $variation='secondary' type='reset' onClick={resetForm}>
                        Cancel
                    </Button>
                    <Button>Confirm</Button>
                </FormRow>
                {successMessage && <p>{successMessage}</p>}
            </Form>
        </StyledForm>

    );

}

export default PreRegisteration;


