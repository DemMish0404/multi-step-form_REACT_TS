import { FormWrapper } from "./FormWrapper"

type UserFormData = {
  firstName: string
  lastName: string
  age: string
}

type UserFormProps = UserFormData & {
  updateFields: (fields: Partial<UserFormData>)=> void
}



export function UserForm({firstName, lastName, age ,updateFields}: UserFormProps) {
  return (
    <FormWrapper title="User Details">
      <label>First Name</label>
      <input
        autoFocus
        required
        type="text"
        value={firstName}
        onChange={(event) => updateFields({firstName: event.target.value})}
        />
      <label>Last Name</label>
      <input
        required
        type="text"
        value={lastName}
        onChange={(event) => updateFields({lastName: event.target.value})}
        />
      <label>Age</label>
      <input
        required
        min={1}
        type="number"
        value={age}
        onChange={(event) => updateFields({age: event.target.value})}
       />
    </FormWrapper>
  )
}
