import { DeleteAllUser } from "./DeleteAllUser";
import styled from "styled-components";
import { fakeUserData } from "../api/fakeUserData";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/slices/UserSlice";
import DisplayUsers from "./DisplayUsers";

const UserDetails = () => {

  const dispatch = useDispatch();

  const addNewUserHandler = (userData) => {
    console.log(userData)
    dispatch(addUser(userData)) // This will be payload for action creator , type will be autocreated i.e user/addUser

    // STORE - REDUCERS

    // ACTION -
    // {
    //   type: 'user/addUser',
    //   payload: 'Warren Glen Hammond'
    // }
  }

  return (
    <Wrapper>
      <div className="content">
        <div className="admin-table">
          <div className="admin-subtitle">List of User Data</div>
          <button className="btn add-btn" onClick={() => addNewUserHandler(fakeUserData())}>Add New User</button>
        </div>
        <ul>
          <DisplayUsers />
        </ul>
        <hr />
        <DeleteAllUser />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin: 1rem 3.2rem;

  .content ul {
    list-style-type: none !important;
    display: flex;
    flex-direction: column;
  }

  h3 {
    margin: 0;
  }

  .admin-table {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 4rem 0;
  }

  .admin-subtitle {
    font-size: 3.2rem;
  }
  
  @media screen and (max-width: 998px) {
    .admin-subtitle {
      margin-bottom: 1.6rem;
    }
  }
`;

export default UserDetails;