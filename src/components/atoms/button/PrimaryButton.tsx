import { FC, memo, ReactNode } from "react";
import { Button } from "@chakra-ui/react";

type Props = {
  children: ReactNode;
  onClick: () => void;
  disabled?: boolean;
  loading?: boolean;
};

export const PrimaryButton: FC<Props> = memo(function Homefunc(props) {
  const { children, disabled = false, loading = false, onClick } = props;

  return (
    <Button
      bg="teal.400"
      color="white"
      _hover={{ opacity: 0.8 }}
      onClick={onClick}
      isLoading={loading}
      isDisabled={disabled || loading}
    >
      {children}
    </Button>
  );
});
