import React from "react";
import styled from "styled-components";

export const Singup = () => {
    return (
        <div>
            <Form>
                <Input type="text" name="in03" placeholder="ユーザーネーム(公開されるよ)"/>
                <Input type="email" name="in01" placeholder="メールアドレス"/>
                <Input type="password" name="in02" placeholder="パスワード"/>
                <Submit type="submit" value="新規登録する"/>
                <Transition><p>使ったことある方はこちらからログイン</p></Transition>
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
background: #F6F6F6;
border-radius: 8px;
padding: 18px 16px;
border: none;
outline: none;
font-size: 13px;
font-weight: bold;
margin-top: 24px;
&::placeholder{
  color: #C4C4C4;
}
`;

const Submit = styled.input`
border: none;
outline: none;
background: #FF9900;
border-radius: 11px;
padding: 16px 27px;
font-size: 18px;
font-weight: bold;
line-height: 21px;
color: #FFFFFF;
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
color: #FF9900;
outline: none;
border: none;
border-bottom: 2px solid #FF9900;
`;
