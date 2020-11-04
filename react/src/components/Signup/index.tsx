import { sign } from "crypto";
import React from "react";
import styled from "styled-components";
import { useAuth } from "../../contexts/auth";
import { useSignup } from "../../hooks/useSignup";

export const Singup = () => {
  const { onAuthState } = useAuth();
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [pass, setPass] = React.useState("");
  const [error, setError] = React.useState("");
  const signupFn = useSignup();

  const submitFn = async () => {
    const user = await signupFn(email, pass, username);
    console.log("user", user);
  };

  return (
    <div>
      <Form>
        <p style={{ color: "red" }}>{error}</p>
        <Input
          type="text"
          name="in03"
          placeholder="ユーザーネーム(公開されるよ)"
          value={username}
          onChange={(e: React.FormEvent<HTMLInputElement>) => {
            setUsername(e.currentTarget.value);
          }}
        />
        <Input
          type="email"
          name="in01"
          placeholder="メールアドレス"
          value={email}
          onChange={(e: React.FormEvent<HTMLInputElement>) => {
            setEmail(e.currentTarget.value);
          }}
        />
        <Input
          type="password"
          name="in02"
          placeholder="パスワード"
          value={pass}
          onChange={(e: React.FormEvent<HTMLInputElement>) => {
            setPass(e.currentTarget.value);
          }}
        />
        <Submit
          type="submit"
          value="新規登録する"
          onClick={() => {
            submitFn();
          }}
        />
        <Transition>
          <p>使ったことある方はこちらからログイン</p>
        </Transition>
      </Form>
    </div>
  );
};

const Form = styled.div`
  width: 287px;
  margin: 178px auto 0 auto;
  text-align: center;
`;

const Input = styled.input`
  width: 255px;
  background: #f6f6f6;
  border-radius: 8px;
  padding: 18px 16px;
  border: none;
  outline: none;
  font-size: 13px;
  font-weight: bold;
  margin-top: 24px;
  &::placeholder {
    color: #c4c4c4;
  }
`;

const Submit = styled.input`
  border: none;
  outline: none;
  background: #ff9900;
  border-radius: 11px;
  padding: 16px 27px;
  font-size: 18px;
  font-weight: bold;
  line-height: 21px;
  color: #ffffff;
  margin: 40px auto;
`;

const Transition = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;
  appearance: none;
  font-weight: bold;
  font-size: 13px;
  line-height: 15px;
  color: #ff9900;
  outline: none;
  border: none;
  border-bottom: 2px solid #ff9900;
`;
