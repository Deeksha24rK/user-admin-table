import { MdDeleteForever } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components"
import { removeUser } from "../redux/slices/UserSlice";

const DisplayUsers = () => {
    // Access data from store using useSelector
    const data = useSelector((state) => state.users.users); // state of complete application

    console.log("users", data)
    const dispatch = useDispatch()

    const deleteUserHandler = (id) => {
        dispatch(removeUser(id))
    }

    return (
        <Wrapper>
            {data && data.map((item) => {
                return (
                    <li key={item.id}>{item.name}
                        <button className="btn-delete" onClick={() => deleteUserHandler(item.id)}>
                            <MdDeleteForever className="delete-icon" />
                        </button>
                    </li>)
            })}
        </Wrapper>
    );
};

const Wrapper = styled.section`
  li {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    border-bottom: 1px solid #eee;

    &:first-child {
      border-top: 1px solid #eee;
    }

    .btn-delete {
    background-color: transparent;
    border: none;
    }

    .delete-icon {
    font-size: 2.6rem;
    color: #f12711;
    filter: drop-shadow(0.2rem 0.2rem 0.5rem rgb(255 0 0 / 0.2));
    cursor: pointer;
  }
  }
`;

export default DisplayUsers;