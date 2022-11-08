import Header from "../components/Header/Header";
import RobotFilter from "../components/RobotFilter/RobotFilter";
import RobotsList from "../components/RobotsList/RobotsList";

const HomePage = () => {
  return (
    <>
      <Header />
      <main className="container">
        <h2>Robots List</h2>
        <RobotFilter />
        <RobotsList />
      </main>
    </>
  );
};

export default HomePage;
