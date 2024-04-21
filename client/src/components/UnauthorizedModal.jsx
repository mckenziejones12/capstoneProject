import "./UnauthorizedModal.css";
export const UnauthorizedModal = ({
  showUnauthorizedModal,
  setShowUnauthorizedModal,
}) => {
  if (!showUnauthorizedModal) return null;
  return (
    <div className="unauthorizedModal">
      <div>Warning: you are not authorized to perform this action!</div>

      <div
        id="closeUnauthModalBtn"
        onClick={() => setShowUnauthorizedModal(false)}
      >
        x
      </div>
    </div>
  );
};
