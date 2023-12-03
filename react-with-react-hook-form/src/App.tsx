import LoginForm from "./components/LoginForm"

function App() {
  return (
    <>
      <LoginForm
        onSubmitForm={(data) => alert(JSON.stringify(data))}
      ></LoginForm>
    </>
  )
}

export default App
