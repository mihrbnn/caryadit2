const ResetButton = () => {
  return (
    <>
      <button
        id="reset"
        className="reset-button text-center p-2 btn btn-warning"
        onClick={() => window.location.reload()}
      >
        Reset
      </button>
    </>
  );
};

export default ResetButton;
