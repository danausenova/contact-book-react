import React from "react";

const Contact = ({ item, deleteContact, checked }) => {
  return (
    <div className="newContact">
      <label class="ui-like">
        <input
          type="checkbox"
          checked={item.completed}
          onChange={() => {
            checked(item.id);
          }}
        />
        <div class="like">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="">
            <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
            <g
              stroke-linejoin="round"
              stroke-linecap="round"
              id="SVGRepo_tracerCarrier"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M20.808,11.079C19.829,16.132,12,20.5,12,20.5s-7.829-4.368-8.808-9.421C2.227,6.1,5.066,3.5,8,3.5a4.444,4.444,0,0,1,4,2,4.444,4.444,0,0,1,4-2C18.934,3.5,21.773,6.1,20.808,11.079Z"></path>
            </g>
          </svg>
        </div>
      </label>
      <span>{item.name}</span>
      <span>{item.surname}</span>
      <span>{item.number}</span>
      <div className="btnNewContact">
        <button
          id={item.id}
          className="btn"
          onClick={() => {
            deleteContact(item.id);
          }}
        >
          <svg
            viewBox="0 0 15 17.5"
            height="17.5"
            width="15"
            xmlns="http://www.w3.org/2000/svg"
            class="icon"
          >
            <path
              transform="translate(-2.5 -1.25)"
              d="M15,18.75H5A1.251,1.251,0,0,1,3.75,17.5V5H2.5V3.75h15V5H16.25V17.5A1.251,1.251,0,0,1,15,18.75ZM5,5V17.5H15V5Zm7.5,10H11.25V7.5H12.5V15ZM8.75,15H7.5V7.5H8.75V15ZM12.5,2.5h-5V1.25h5V2.5Z"
              id="Fill"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Contact;
