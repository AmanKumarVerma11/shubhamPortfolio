import Body from "./Components/Body";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

function App() {
  return (
    <>
      {/* 
        Developed and maintained by Aman Kumar Verma.
        If you have any questions or need further assistance, feel free to reach out!
            
        LinkedIn: https://www.linkedin.com/in/aman-kr-verma11/
        GitHub: https://github.com/AmanKumarVerma11
            
        Thank you for reviewing my work!
      */}

      <div className="bg-amber-50 min-h-screen px-7 pt-3 flex flex-col gap-16 md:px-10 md:pt-6 md:justify-between lg:px-20 lg:pt-8 " >
        <Header />
        <Body />
        <Footer />
      </div>
    </>
  );
}

export default App;