
import { FormWrapper } from "./FormWrapper"
 
type AccountFormData = {
  email: string
  password: string
}

type AccountFormProps = AccountFormData & {
  updateFields: (fields: Partial<AccountFormData>)=> void
}



export function AccountForm({email, password, updateFields}: AccountFormProps) {
  return (
    <FormWrapper title="Account Creation">
      <label  >Email</label>
      <input 
        autoFocus
        required
        type="email"
        value={email}
        onChange={(event) => updateFields({email: event.target.value})}
        />
      <label>Password</label>
      <input
        required
        type="password"
        value={password}
        onChange={(event) => updateFields({password: event.target.value})}
      />
    </FormWrapper>
  )
}
