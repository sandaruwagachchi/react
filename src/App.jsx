import Card from "./Card";
import Footer from "./Footer";
import Header from "./Header";
import Student from "./Student";

function App(){
   return(
    <>
     <Card/>
     <Card/>
     <Header/> 
     <Footer/>
     <Student name = "Sandaru Pramuditha Wagachchi" age = {23}
     isStudent = {true}/>
      <Student name = "Inod Arunaji Wagachchi" age = {33}
     isStudent = {false}/>
      <Student name = "Dinuki Hasanga Wagachchi" age = {28}
     isStudent = {false}/>
      <Student name = "Ishara Idumini Vidanagamachchi" age = {33}
     isStudent = {false}/>
     </>
     //props name has not in stirng it declare in curly brackets.
   );
}
export default App;