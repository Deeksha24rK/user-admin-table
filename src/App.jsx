import AdminDetails from "./components/AdminDetails";
import Navbar from "./components/Navbar";
import UserDetails from "./components/UserDetails";

// Step3: Connect Redux with React - Provider
const App = () => {
  return (
    <>
      <Navbar />
      <UserDetails />
      <AdminDetails />
    </>
  );
};

export default App;
