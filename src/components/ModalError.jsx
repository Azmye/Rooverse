const ModalError = ({ errorTitle, errorMessage }) => {
  const message = (message) => {
    switch (message) {
      case 'auth/user-not-found':
        return (errorMessage = 'User Not Found!');
      case 'auth/wrong-password':
        return (errorMessage = 'Wrong Password');
      case 'auth/invalid-email':
        return (errorMessage = 'Invalid Email');
      case 'auth/email-already-in-use':
        return (errorMessage = 'Email Already Exists');
      default:
        return (errorMessage = null);
    }
  };
  message(errorMessage);
  return (
    <div className="absolute right-0 left-0 p-5 ">
      <div className="flex flex-col bg-red-500 text-white shadow-xl rounded-lg mx-auto p-3">
        <div className="font-bold border-b-2">{errorTitle}</div>
        <div>{errorMessage}</div>
      </div>
    </div>
  );
};

export default ModalError;
