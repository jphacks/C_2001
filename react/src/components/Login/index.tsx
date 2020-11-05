import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { useLogIn } from "../../hooks/useLogIn";
import { HOME_PATH } from "../../services/utils/routeUrlPath";

export const Login = () => {
  const [email, setEmail] = React.useState("");
  const [pass, setPass] = React.useState("");
  const [error, setError] = React.useState<any>("");
  const loginFn = useLogIn();
  const history = useHistory();

  const submitFn = async () => {
    try {
      await loginFn(email, pass);
      history.push(HOME_PATH);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <Form>
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
          value="ログイン"
          onClick={() => {
            submitFn();
          }}
        />
        <Transition>
          <p>新規登録はこちらから</p>
        </Transition>
      </Form>
    </div>
  );
};

const Form = styled.div`
  width: 287px;
  margin: 220px auto 0 auto;
  text-align: center;
`;

const Input = styled.input`
  size: 13;
  maxlength: 50;
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
  padding: 16px 43px;
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
