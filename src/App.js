import { CounterApp, GetTimeApp, DigitalClock, Event, FormExample, FormExample2, FormExample3 } from './components/index';

function App() {
  return (
    <>
      <header className="App-header">
        {/* Counter App UseState Hook Example */}
        {/* <CounterApp /> */}

        {/* Get Current TIme Example */}
        {/* <GetTimeApp/> */}

        {/* Real Time Digital Clock Example */}
        {/* <DigitalClock /> */}

        {/* Handling Events */}
        {/* <Event /> */}

        {/* Submit data from one input field */}
        {/* <FormExample/> */}

        {/* Submit data from more than one input field */}
        {/* <FormExample2 /> */}

        {/* Retriveing Data using Object.it is simple than prev method. */}
        <FormExample3/>
      </header>
    </>
  );
}

export default App;
