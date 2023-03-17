import { ChangeEvent, FC, memo, useState } from "react";
import { Box, Stack, Flex, Heading, Divider, Input } from "@chakra-ui/react";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { useAuth } from "../../hooks/useAuth";

export const Login: FC = memo(function Loginfunc() {
  const { login, loading } = useAuth();
  const [userId, setUserId] = useState("");

  const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) =>
    setUserId(e.target.value);

  const onClicklogin = () => login(userId);
  console.log("aaaaaaa");
  console.log(userId === "");
  console.log("bbbbbbb");

  return (
    <Flex align="center" justify="center" height="100vh">
      <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
        <Heading as="h1" size="lg" textAlign="center">
          ユーザー管理アプリ
        </Heading>
        <Divider my={4} />
        <Stack spacing={6} py={4} px={10}>
          <Input
            placeholder="ユーザーID"
            value={userId}
            onChange={onChangeUserId}
          />
          <PrimaryButton
            disabled={userId === ""}
            loading={loading}
            onClick={onClicklogin}
          >
            ログイン
          </PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  );
});