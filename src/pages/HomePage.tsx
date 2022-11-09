import Header from "../components/Header/Header";
import LoginForm from "../components/Login/Login";
import RobotFilter from "../components/RobotFilter/RobotFilter";
import RobotsList from "../components/RobotsList/RobotsList";
import { useAppSelector } from "../redux/hooks";

const HomePage = () => {
  const loggedUser = useAppSelector(({ users }) => users.isLogged);
  const userName = useAppSelector(({ users }) => users.userName);

  return (
    <>
      <Header />
      {!loggedUser && <LoginForm />}
      {loggedUser && <h4>{`Welcome ${userName}!`}</h4>}
      <main className="container">
        <h2>Robots List</h2>
        <RobotFilter />
        <RobotsList />
      </main>
    </>
  );
};

export default HomePage;
