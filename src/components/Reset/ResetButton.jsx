const ResetButton = () => {
  return (
    <>
      <button
        id="reset"
        className="reset-button"
        onClick={() => window.location.reload()}
      >
        Reset
      </button>
    </>
  );
};

export default ResetButton;
