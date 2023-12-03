import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
  username: string
  password: string
}

interface Props {
  onSubmitForm: (data: Inputs) => void
}
export default function LoginForm(props: Props) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => props.onSubmitForm(data)

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{
        display: "flex",
        flexDirection: "column",

        gap: "10px",
        maxWidth: "300px",
        margin: "0 auto",
      }}
    >
      <div>React with React Hook Form</div>

      <input
        placeholder="Username"
        {...register("username", { required: true })}
      />
      {errors.username && <span>Username is required</span>}
      <input
        placeholder="Password"
        {...register("password", { required: true })}
      />
      {errors.password && <span>Password is required</span>}
      <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <button onClick={() => reset()}>Clear</button>
        <button type="submit">Submit</button>
      </div>
    </form>
  )
}
