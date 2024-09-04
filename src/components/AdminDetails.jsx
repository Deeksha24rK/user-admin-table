// import { DeleteAllUser } from "./DeleteAllUser";
import styled from "styled-components";
import { fakeUserData } from "../api/fakeUserData";
import { useDispatch } from "react-redux";
import DisplayAdmin from "./DisplayAdmin";
import { addAdmin } from "../redux/slices/AdminSlice";
import { DeleteAllAdmin } from "./DeleteAllAdmin";

const AdminDetails = () => {

  const dispatch = useDispatch();

  const addNewAdminHandler = (userData) => {
    console.log(userData)
    dispatch(addAdmin(userData)) // This will be payload for action creator , type will be autocreated
  }

  return (
    <Wrapper>
      <div className="content">
        <div className="admin-table">
          <div className="admin-subtitle">List of Admin Details</div>
          <button className="btn add-btn" onClick={() => addNewAdminHandler(fakeUserData())}>Add New Admin</button>
        </div>
        <ul>
          <DisplayAdmin />
        </ul>
        <hr />
        <DeleteAllAdmin />
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

export default AdminDetails;