import css from "./Contact.module.css";
import { CgGirl } from "react-icons/cg";
import { FaPhoneAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
// import { deleteContactAction } from "../../redux/contacts/contacts.slice";
import { deleteContact } from "../../redux/contacts/operations";

export const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  return (
    <li className={css.contact}>
      <div>
        <p className={css.content}>
          <CgGirl />
          {name}
        </p>
        <p className={css.content}>
          <FaPhoneAlt />
          {number}
        </p>
      </div>
      <button
        onClick={() => dispatch(deleteContact(id))}
        type="button"
      >
        Delete
      </button>
    </li>
  );
};
