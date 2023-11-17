import "./App.css"

const App = () => {
  return (
    <>
      <span className="logo">VibeLinkz</span>
      <div className="page_content">
        <h1>Youtube to Mp3</h1>
        <h3>Take you favorite videos and turn them into your favorite tunes</h3>
        <input placeholder="Paste your YouTube link here" type="text" className="link_input"></input>
      </div>
      <br/>
      <div className="conversion_btn">
        <button className="btn">Convert</button>
      </div>
      <br/>
      <div className="link">
        <a>Download Link</a>
      </div>
    </>
  )
}

export default App