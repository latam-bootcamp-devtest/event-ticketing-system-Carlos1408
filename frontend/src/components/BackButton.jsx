import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";

export default function BackButton({ redirect }) {
  const navigate = useNavigate();
  return (
    <Button
      label="Go Back"
      onClick={() => {
        navigate(redirect ?? "..");
      }}
    />
  );
}
