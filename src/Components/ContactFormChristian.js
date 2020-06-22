import React, { useState, useEffect } from 'react'
import * as Yup from 'yup'
import formSchema from '../validation/contactFormSchema'
import ErrorDiv from '../StyledComponents/ErrorDiv'
import StyledForm from '../StyledComponents/StyledForm'

const initialFormData = {
    name: '',
    email: '',
    message: '',
}

const initialFormErrors = {
    name: '',
    email: '',
    message: '',
}

const initialDisabled = true

export default function ContactForm(props) {
    const [formData, setFormData] = useState(initialFormData)
    const [formErrors, setFormErrors] = useState(initialFormErrors)
    const [disabled, setDisabled] = useState(initialDisabled)

    const onChange = e => {
        const { name, value } = e.target

        Yup
            .reach(formSchema, name)
            .validate(value)
            .then(valid => {
                setFormErrors({
                    ...formErrors,
                    [name]: ""
                })
        })
      
            .catch(err => {
            setFormErrors({
            ...formErrors,
            [name]: err.errors[0]
            })
        })

        setFormData({
            ...formData,
            [name]: value,
        }) 
    }

    const onSubmit = e => {
        e.preventDefault()
        setFormData(initialFormData)
    }

    useEffect(() => {
        formSchema.isValid(formData).then(valid => {
            setDisabled(!valid)
        })
    }, [formData])

    return (
        <StyledForm id='contact-form' onSubmit={onSubmit}>
            <h2>Reach Out to Us</h2>
            
            <ErrorDiv>
                <p className='err name-error'>{formErrors.name}</p>
                <p className='err email-error'>{formErrors.email}</p>
                <p className='err message-error'>{formErrors.message}</p>
            </ErrorDiv>

            <label>Name:&nbsp;
                <input 
                    type='text'
                    name='name'
                    value={formData.name}
                    onChange={onChange}
                />
            </label>
            <br />
            <label>Email:&nbsp;
                <input 
                    type='text'
                    name='email'
                    value={formData.email}
                    onChange={onChange}
                />
            </label>
            <br />
            <textarea
                name='message'
                placeholder='Share your thoughts with us (max 250 characters)'
                value={formData.message}
                onChange={onChange}
                cols='30'
                rows='10'
            />
            <br />
            <button disabled={disabled}>Send message</button>
        </StyledForm>
    )
}