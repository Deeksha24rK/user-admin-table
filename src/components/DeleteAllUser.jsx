import { useDispatch } from "react-redux";
import { deleteAllUsers } from "../redux/actions/deleteAllUsersAction";
import styled from "styled-components"

export const DeleteAllUser = () => {
    const dispatch = useDispatch();

    return (
        <Wrapper>
            <button className="btn clear-btn"
                onClick={() => {
                    dispatch(deleteAllUsers());
                }}
            >
                Clear Data
            </button>
        </Wrapper>
    );
};

const Wrapper = styled.section`
  .clear-btn {
    text-transform: capitaliize;
    background-color: #db338a;
    margin-top: 2rem;
  }
`;
