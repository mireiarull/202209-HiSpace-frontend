import Button from "../components/Button/Button";
import Header from "../components/Header/Header";
import LoginForm from "../components/Login/Login";
import RobotFilter from "../components/RobotFilter/RobotFilter";
import RobotsList from "../components/RobotsList/RobotsList";
import useUser from "../hooks/useUser";
import { useAppSelector } from "../redux/hooks";

const HomePage = () => {
  const loggedUser = useAppSelector(({ users }) => users.isLogged);
  const { logOut } = useUser();

  return (
    <>
      <Header />
      {!loggedUser && <LoginForm />}
      {loggedUser && <h4>Welcome</h4>}
      {loggedUser && <Button text="Log out" action={logOut} />}
      <main className="container">
        <h2>Robots List</h2>
        <RobotFilter />
        <RobotsList />
      </main>
    </>
  );
};

export default HomePage;
