import { Dispatch, SetStateAction } from "react";
import Backdrop from "../backdrop/Backdrop";
import Modal from "../modals/Modal";

interface NotificationPopUpProps {
  isNotificationShown: boolean;
  setIsNotificationShown: Dispatch<SetStateAction<boolean>>;
}

export default function NotificationPopUp({
  isNotificationShown,
  setIsNotificationShown,
}: NotificationPopUpProps) {
  const closeNotification = () => {
    setIsNotificationShown(false);
  };

  return (
    <>
      <Modal
        isPopUpShown={isNotificationShown}
        setIsPopUpShown={setIsNotificationShown}
      >
        <div className="flex flex-col items-center gap-y-6 text-black">
          <h2
            className={`relative text-center text-20reg tab:text-24reg tab:uppercase`}
          >
            На жаль, щось пішло не так
          </h2>
          <p className="text-14reg tab:text-18reg text-center">
            Інформація по вашому замовленню не була відправлена. Будь ласка,
            спробуйте відправити замовлення ще раз або подзвоніть нам.
          </p>
        </div>
      </Modal>
      <Backdrop isVisible={isNotificationShown} onClick={closeNotification} />
    </>
  );
}
