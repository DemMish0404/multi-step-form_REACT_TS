import { FormEvent, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useMultiStepForm } from './hooks/useMultiStepForm'
import { UserForm } from './UserForm'
import { AccountForm } from './AccountForm'
import { AddressForm } from './AddressForm'



type FormData = {
  firstName: string
  lastName: string
  age: string
  street: string
  city: string
  state: string
  zip: string
  email: string
  password: string
}

const INITIAL_DATA: FormData = {
  firstName: "",
  lastName: "",
  age: "",
  street: "",
  city: "",
  state: "",
  zip: "",
  email: "",
  password: "",
}



function App() {

  const [formData, setFormData] = useState(INITIAL_DATA)

  // Partial значит что принимаем хотя бы одно поле из ТИПА 
  function updateFields(fields: Partial<FormData>){
    setFormData(prevFormData => {
      // все старые остаются а новые (которые в fields обновляются)
      return {...prevFormData, ...fields}
    })
  }

  const {
    next,
    currentStepIndex,
    step,
     steps,
    back,
    isFirstStep,
    isLastStep,
    // goTo
  } = useMultiStepForm([<UserForm {...formData } updateFields={updateFields}/> ,<AccountForm {...formData } updateFields={updateFields}/>, <AddressForm {...formData } updateFields={updateFields} />])


  function onSubmit(event: FormEvent){
    event.preventDefault()

    if (!isLastStep ) return next()
    console.log(formData, `вот все инфа с формы`)
    alert('успешно зарегистрированы!!!!')
}
  return (
    <div style={{
      position: 'relative',
      background: 'white',
      border: '1px solid black',
      padding: '2rem',
      margin: '1rem',
      borderRadius: '.5rem',
      fontFamily: 'Arial'
    }}>
     <form action="" onSubmit={onSubmit}>
      <div style={{position: 'absolute', insetBlockStart: '0.5rem', insetInlineEnd: '.5rem'}}>{currentStepIndex + 1}/{steps.length}</div>

      {step}

      <div style={{
        marginTop: "1rem",
        display: 'flex',
        gap: '0.5rem',
        justifyContent: 'flex-end'
      }}>
        {!isFirstStep && <button onClick={back} type='button'>back</button>}
        <button type='submit'>{isLastStep ? 'finish' : 'next'}</button>

      </div>

     </form>
    </div>
  )
}

export default App
