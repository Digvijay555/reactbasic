import logo from './logo.svg';
import './App.css';

// import the Greet component here
import Greet from './components/Greet'

// import the welcome class components here
import Welcome from './components/welcome';

// import the PropsInFunc component  in which we pass props
import PropsInFun from './Props/PropsInFun';

// import the PropsInClass component in which we pass props
import PropsInClas from './Props/PropsInClass';

// import the useOfStateInClass component to see the example of state in class components
import UseOfStateInClass from './State/useOfStateInClass';

//import ParentComponents to see how the method pass as props in components
import ParentComponent from './MethodPass/ParentComponents';

function App() {
  return (
    <div className="App">

      {/* <UseOfStateInClass/> */}

      {
      // call components
      /* <Greet/>
      <Welcome/> */}

      {/* // call components and Pass Props in function component
      <PropsInFun name="rahul" class="10th">
        <p>Hello everyone kese ho</p>
      </PropsInFun>
      <PropsInFun name="sanju" class="11th"><button>Save</button> </PropsInFun>
      <PropsInFun name="manju" class="12th"/>*/}

       {/* // call components and Pass Props in class component 
      <PropsInClas name="rahul" class="10th"/>
      <PropsInClas name="sanju" class="11th"/>
      <PropsInClas name="manju" class="12th"/>*/}

      <ParentComponent/>

    </div>
  );
}

export default App;
