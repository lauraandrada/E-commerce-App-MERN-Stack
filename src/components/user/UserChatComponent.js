import "../../chats.css";
import Button from "react-bootstrap/Button";

const UserChatComponent = () => {
  return (
    <>
      <input type="checkbox" id="check" />
      {/* chat icons */}
      <label className="chat-btn" htmlFor="check">
        <i className="bi bi-chat-dots comment"></i>
        <span class="position-absolute start-100 translate-middle badge border border-light rounded-circle bg-danger p-2">
          <span class="visually-hidden">unread messages</span>
        </span>
        <i className="bi bi-x-octagon close"></i>
      </label>
      {/* chat body */}
      <div className="chat-wrapper">
        {/* chat header */}
        <div className="chat-header">
          <h6>Let's Chat!</h6>
        </div>

        <div className="chat-form">
          {/* messages window */}
          <div className="cht-msg">
            {Array.from({ length: 20 }).map((_, id) => (
              <div key={id}>
                <p>
                  <b>You wrote:</b> Hello, world! This is a toast message.
                </p>
                <p className="bg-primary p-3 ms-4 text-light rounded-pill">
                  <b>Support wrote:</b> Hello, world! This is a toast message.
                </p>
              </div>
            ))}
          </div>
          {/* customer input */}
          <textarea
            id="clientChatMsg"
            className="form-control"
            placeholder="your text message"
          ></textarea>
          {/* submit button */}
          <Button variant="success" className="submit-btn">
            Send
          </Button>
        </div>
      </div>
    </>
  );
};

export default UserChatComponent;
