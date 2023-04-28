import "./App.css";
import "@fontsource/poppins";
import HomeScreen from "./screens/HomeScreen";
import MainLayout from "./Layouts/MainLayout";
function App() {
  return (
    <MainLayout>
      <HomeScreen/>
    </MainLayout>
  );
}

export default App;
