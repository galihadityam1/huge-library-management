"use client"

import AuthForm from '@/components/AuthForm'
import { signUpSchema } from '@/lib/validations'

const SignUp = () => (
  <AuthForm 
    type="SIGN-UP"
    schema={signUpSchema}
    defaultValues={{
      fullname: "",
      email: "",
      universityId: 0,
      universityCard: "",
      password: ""
    }}
    onSubmit={() => {}}
  />
)

export default SignUp