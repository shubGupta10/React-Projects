import UserContext from "./UserContext";

const UsercontextProvider = ({children}) => {
  const [user, SetUser] = React.useState();
  return(
    <UserContext.Provider  value={{user, SetUser}}> //yha hum 2 value bhej rhe h , user and Setuser taaki components me kaam aaye.
    {children}
    </UserContext.Provider>
  )
}

export default UsercontextProvider 