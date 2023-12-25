import Basic from "./components/Basic"
import Serverless from "./components/Serverless"

function App() {
  return (
   <>
   <section>
      <h2>Basic Setup</h2>
      <Basic />
   </section>
   <section>
      <h2>Airtable/Serverless Setup</h2>
      <Serverless />
   </section>
   </>
  )
}

export default App
